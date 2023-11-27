import "./App.css";
import Navbar from "./components/Hero/Navbar/Navbar";
import Hero from "./components/Hero/index";
import Footer from "./components/Hero/Footer/Footer";
import { Suspense } from "react";
import i18n from "./i18n";
// import browserLang from "browser-lang";
// import { FormattedMessage, IntlProvider } from "react-intl";
// const supportedLanguages = [
//   "en",
//   "eu",
//   "ka",
//   "af",
//   "sq",
//   "am",
//   "vi",
//   "ar",
//   "hy",
//   "az",
//   "be",
//   "bn",
//   "zu",
//   "bs",
//   "bg",
//   "cs",
//   "yo",
//   "tr",
//   "yi",
//   "ca",
//   "zh",
//   "hr",
//   "et",
//   "th",
//   "el",
//   "de",
//   "ms",
//   "lt",
//   "lv",
//   "km",
//   "my",
//   "hi",
//   "pa",
//   "it",
//   "no",
//   "kk",
//   "mn",
//   "mt",
//   "nl",
//   "da",
//   "fy",
//   "fr",
//   "ku",
//   "eo",
//   "uk",
//   "ht",
//   "he",
//   "sw",
//   "es",
//   "is",
//   "ne",
//   "mr",
//   "cy",
//   "uz",
//   "ur",
//   "ug",
//   "te",
//   "gl",
//   "rw",
//   "id",
//   "ta",
//   "tl",
//   "fi",
//   "gu",
//   "ha",
//   "hu",
//   "gd",
//   "sk",
//   "sv",
//   "ig",
//   "mk",
//   "pl",
//   "fa",
//   "kn",
//   "lb",
//   "ml",
//   "lo",
//   "so",
//   "sl",
//   "ga",
//   "ro",
//   "si",
//   "sn",
//   "sr",
//   "ru",
//   "or",
//   "mg",
//   "ckb",
//   "ps",
//   "pt",
//   "ja",
//   "ky",
//   "ko",
// ];
function App() {
  // const defaultLocale = browserLang({
  //   languages: supportedLanguages,
  //   fallback: "en",
  // });
  // const [locale, setLocale] = useState(defaultLocale);
  // const [messages, setMessages] = useState(null);
  // useEffect(() => {
  //   const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=${import.meta.env.VITE_I18NEXUS_API_KEY}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setMessages(data);
  //     });
  // }, [locale]);
  return (
    <>
      {/* <IntlProvider locale={locale} messages={messages}>
        <div className="App">
          <select onChange={(event) => setLocale(event.target.value)}>
            {supportedLanguages.map((locale) => (
              <option value={locale} key={locale}>
                {locale}
              </option>
            ))}
          </select> */}

      {/* <h1>Vite + React</h1>
          <FormattedMessage id="welcome_msg" /> */}
      <div className="App">

        {/* <Suspense fallback={null}> */}

          {/* sticky bottom right icon  */}


          {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a beer"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src=""
              />
            </a>
          </div>
        </div> */}
          <Navbar />
          <Hero />
          <Footer />
        
      </div>


      {/* </IntlProvider> */}
    </>
  );
}

export default App;
