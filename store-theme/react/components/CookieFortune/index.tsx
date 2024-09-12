import React, { useState } from "react";
import { PageBlock, Button, Alert, Spinner } from "vtex.styleguide";

import useCookieFortune from "./hooks/useCookieFortune";

import "./styles/global.css";

export default function CookieFortune() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    cookieFortunePhrase,
    luckyNumber,
    isLoading,
    isError,
    getCookieFortunePhrase,
  } = useCookieFortune();

  const handleClick = () => {
    getCookieFortunePhrase();
    setIsOpen(true);
  };

  const handleClickAgain = () => {
    getCookieFortunePhrase();
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="cookie-fortune-container">
          <Spinner />
        </div>
      );
    }

    if (cookieFortunePhrase) {
      return (
        <div className="tc cookie-fortune-container animated fadeIn">
          <h3 className="t-heading-3 fw5 gold cursive-font cookie-fortune-phrase">
            {cookieFortunePhrase}
          </h3>
          <h5 className="t-heading-5 fw4 gold mt2 cookie-fortune-number">
            🍀 Lucky number: {luckyNumber}
          </h5>
        </div>
      );
    }

    if (isError) {
      return (
        <Alert type="error" onClose={() => {}}>
          Error fetching your fortune. Please try again.
        </Alert>
      );
    }

    return null;
  };

  return (
    <section className="w-100 w-80-m center bg-section">
      <main className="w-100 pa5 pa7-ns tc">
        <PageBlock
          title="Discover what fate has in store for you!"
          variation="full"
        >
          <div className="lucky-container">
            {renderContent()}

            {!isOpen ? (
              <button
                className="cookie-fortune-button"
                role="button"
                onClick={handleClick}
                disabled={isLoading}
              >
                🥠 Open Fortune Cookie
              </button>
            ) : (
              <div className="w-100 flex justify-center mt8">
                <Button
                  disabled={isLoading}
                  variation="tertiary"
                  size="small"
                  onClick={handleClickAgain}
                >
                  Try another fortune cookie
                </Button>
              </div>
            )}
          </div>
        </PageBlock>
      </main>
    </section>
  );
}
