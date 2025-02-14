import * as React from "react";

const colors = ["W", "U", "B", "R", "G", "C"] as const;
const colorDescriptions: Record<(typeof colors)[number], string> = {
  W: "one white mana",
  U: "one blue mana",
  B: "one black mana",
  R: "one red mana",
  G: "one green mana",
  C: "one colorless mana",
};

const rarities = ["c", "u", "r", "m"];

type InputType = {
  name: string;
  label: string;
  shortLabel: string;
};

const inputTypeMap: Record<string, InputType> = {
  oracle: { name: "oracle", label: "Oracle text", shortLabel: "Text" },
  type: { name: "type", label: "Types", shortLabel: "Type" },
  name: { name: "name", label: "Card name", shortLabel: "Name" },
  mana: { name: "mana", label: "Exact mana cost", shortLabel: "Cost" },
};

const inputTypes = Object.values(inputTypeMap);

function Divider() {
  return <hr className="border-l border-solid border-primary h-8"></hr>;
}

export default function AdvancedSearch() {
  const [inputType, setInputType] = React.useState<InputType>(inputTypes[0]);

  React.useEffect(() => {
    // Auto-focus main input on mount
    document.getElementById("main-input")?.focus();
  }, []);

  return (
    <form
      noValidate
      action="/advanced"
      acceptCharset="UTF-8"
      method="post"
      id="sf-advanced-ext-container"
    >
      <div className="flex items-center gap-2 w-full max-w-[1000px]">
        <div className="flex-1 flex">
          <label className="visuallyhidden" htmlFor="input_type">
            Input type
          </label>
          <select
            name="input_type"
            aria-controls="main-input"
            className="select-n !-mr-px !rounded-r-none focus:z-10"
            onChange={(e) => setInputType(inputTypeMap[e.target.value])}
          >
            {inputTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.shortLabel}
              </option>
            ))}
          </select>
          <label htmlFor="oracle" className="visuallyhidden">
            {inputType.label}
          </label>
          <input
            type="text"
            name={inputType.name}
            id="main-input"
            className="flex-1 form-n-input !rounded-l-none focus:z-10"
            placeholder={inputType.label}
            autoCorrect="off"
            spellCheck="false"
          />
        </div>
        <Divider />
        <fieldset className="flex items-center gap-1">
          <legend className="visuallyhidden">Card colors</legend>
          <label className="visuallyhidden" htmlFor="color_comparison">
            Format
          </label>
          <select
            className="select-n"
            name="color_comparison"
            id="color_comparison"
          >
            <option value="=">=</option>
            <option value=":">:</option>
            <option value=">=">{`>=`}</option>
            <option value="<=">{`<=`}</option>
          </select>
          {colors.map((color) => (
            <label
              key={color}
              className="advanced-search-checkbox button-n focus-within:bg-white focus-within:border-primary"
            >
              <input
                type="checkbox"
                name="color[]"
                value={color}
                className="peer visuallyhidden"
              />
              <abbr
                className={`card-symbol card-symbol-${color} pointer-events-none scale-125 opacity-30 peer-checked:opacity-100`}
                title={colorDescriptions[color]}
              >
                {`{${color}}`}
              </abbr>
            </label>
          ))}
        </fieldset>
        <Divider />
        <fieldset className="flex gap-1">
          {rarities.map((rarity) => (
            <label
              key={rarity}
              className="advanced-search-checkbox button-n focus-within:bg-white focus-within:border-primary"
            >
              <input
                type="checkbox"
                name="rarity[]"
                value={rarity}
                className="peer visuallyhidden"
              />
              <span className="font-bold uppercase opacity-30 peer-checked:opacity-100">
                {rarity}
              </span>
            </label>
          ))}
        </fieldset>
        <Divider />
        <fieldset className="flex">
          <label className="visuallyhidden" htmlFor="format_1">
            Format
          </label>
          <select
            className="select-n medium-select auto"
            name="format_1"
            id="format_1"
          >
            <option value="" label="No Format" />
            <option value="standard">Standard</option>
            <option value="future">Future Standard</option>
            <option value="historic">Historic</option>
            <option value="gladiator">Gladiator</option>
            <option value="pioneer">Pioneer</option>
            <option value="explorer">Explorer</option>
            <option value="modern">Modern</option>
            <option value="legacy">Legacy</option>
            <option value="pauper">Pauper</option>
            <option value="vintage">Vintage</option>
            <option value="penny">Penny Dreadful</option>
            <option value="commander">Commander</option>
            <option value="oathbreaker">Oathbreaker</option>
            <option value="brawl">Brawl</option>
            <option value="historicbrawl">Historic Brawl</option>
            <option value="alchemy">Alchemy</option>
            <option value="paupercommander">Pauper Commander</option>
            <option value="duel">Duel Commander</option>
            <option value="oldschool">Old School 93/94</option>
            <option value="premodern">Premodern</option>
            <option value="predh">PreDH</option>
          </select>
          <input
            type="text"
            hidden
            id="format_status_1"
            name="format_status_1"
            value="legal"
          />
        </fieldset>
        <button type="submit" className="button-n">
          Search
        </button>
      </div>
    </form>
  );
}
