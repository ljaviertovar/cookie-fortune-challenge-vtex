import React, { ChangeEvent, useState } from 'react'

import { useRuntime } from 'vtex.render-runtime'
import { defineMessages, FormattedMessage } from 'react-intl'

import {
  experimental_I18nProvider as I18nProvider,
  createSystem,
  DataGrid,
  DataView,
  DataViewControls,
  FlexSpacer,
  PageHeader,
  PageTitle,
  Pagination,
  ToastProvider,
  useDataGridState,
  useDataViewState,
  usePaginationState,
  Input,
  Button,
  Flex,
  Skeleton,
  IconTrash,
} from '@vtex/admin-ui'

import useCookieFortunes from './hooks/useCookieFortunes'

const ITEMS_PER_PAGE = 50

const [ThemeProvider] = createSystem({
  key: 'admin-app',
})

const messages = defineMessages({
  title: {
    id: 'admin/cookie-fortune.title',
  },
})

interface CookieFortune {
  DocumentId: string
  IdcookieFortune: number
  CookieFortune: string
}

const AdminCookieFortune: React.FC = () => {
  const [newFortune, setNewFortune] = useState('')
  const {
    cookieFortunes,
    isLoading,
    isAddLoading,
    isDeleteLoading,
    addCookieFortune,
    deleteCookieFortune,
  } = useCookieFortunes()

  const { culture: { locale } } = useRuntime()

  const view = useDataViewState()
  const pagination = usePaginationState({ pageSize: ITEMS_PER_PAGE, total: 0 })
  pagination.total = cookieFortunes.length

  const currentPageItems = cookieFortunes.slice(
    (pagination.currentPage - 1) * ITEMS_PER_PAGE,
    pagination.currentPage * ITEMS_PER_PAGE
  )

  const grid = useDataGridState<CookieFortune>({
    view,
    columns: [
      { id: 'IdcookieFortune', header: '#' },
      { id: 'CookieFortune', header: 'Cookie Fortune' },
      {
        id: 'Actions',
        header: 'Actions',
        resolver: {
          type: 'root',
          render: ({ item }) => (
            <Button
              variant="critical"
              onClick={() => handleDeleteFortune(item.DocumentId)}
              disabled={isDeleteLoading}
              loading={isDeleteLoading}
            >
              <IconTrash />
            </Button>
          ),
        },
      },
    ],
    items: currentPageItems,
    length: ITEMS_PER_PAGE,
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFortune(event.target.value)
  }

  const handleAddFortune = () => {
    if (newFortune.trim()) {
      addCookieFortune(newFortune)
      setNewFortune('')
    }
  }

  const handleDeleteFortune = (id: string) => {
    deleteCookieFortune(id)
  }

  return (
    <I18nProvider locale={locale}>
      <ThemeProvider>
        <ToastProvider>
          <PageHeader>
            <PageTitle>
              <FormattedMessage {...messages.title} />
            </PageTitle>
          </PageHeader>

          <div style={{ padding: '0 2rem', paddingBottom: '2rem' }}>
            {isLoading ? (
              <Flex justify="center">
                <Skeleton csx={{ width: 'full', height: '100vh', marginTop: '2rem' }} />
              </Flex>
            ) : (
              <DataView state={view}>
                <DataViewControls>
                  <Flex align="center" csx={{ gap: '0.5rem' }}>
                    <Input
                      id="newCookieFortune"
                      label="Cookie Fortune"
                      type="text"
                      value={newFortune}
                      onChange={handleInputChange}
                    />
                    <FlexSpacer />
                    <Button
                      size="large"
                      onClick={handleAddFortune}
                      disabled={!newFortune.trim()}
                      loading={isAddLoading}
                    >
                      Add Fortune
                    </Button>
                  </Flex>
                  <FlexSpacer />
                  <Pagination
                    state={pagination}
                    preposition="of"
                    subject="results"
                    prevLabel="Previous"
                    nextLabel="Next"
                  />
                </DataViewControls>
                <DataGrid state={grid} />
              </DataView>
            )}
          </div>
        </ToastProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default AdminCookieFortune
