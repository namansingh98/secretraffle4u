
import browserLang from 'browser-lang';
import { useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

const supportedLanguages = ["en","eu","ka","af","sq","am","vi","ar","hy","az","be","bn","zu","bs","bg","cs","yo","tr","yi","ca","zh","hr","et","th","el","de","ms","lt","lv","km","my","hi","pa","it","no","kk","mn","mt","nl","da","fy","fr","ku","eo","uk","ht","he","sw","es","is","ne","mr","cy","uz","ur","ug","te","gl","rw","id","ta","tl","fi","gu","ha","hu","gd","sk","sv","ig","mk","pl","fa","kn","lb","ml","lo","so","sl","ga","ro","si","sn","sr","ru","or","mg","ckb","ps","pt","ja","ky","ko"];
    
export default function App() {
  const defaultLocale = browserLang({
    languages: supportedLanguages,
    fallback: "en"
  });

  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=${import.meta.env.I18NEXUS_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      });
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        <p>
          <FormattedMessage id="welcome_msg" />
        </p>
      </div>
    </IntlProvider>
  );
}
      