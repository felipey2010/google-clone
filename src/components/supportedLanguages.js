// import SupportedLanguages from "../utils/languages.json";

export default function SelectLanguage() {
  return (
    <select>
      <option>English (United States)</option>
      <option value="en-GB">English (British)</option>
      {/* {SupportedLanguages.text.map((language, index) => {
        <option value={language.code} key={index}>
          {language.language}
        </option>;
      })} */}
    </select>
  );
}
