import { useState, type ChangeEvent } from "react";

const vars = [
  { name: "Primary", varName: "--gradient-from", defaultColor: "#7c3aed" },  // violet-600
  { name: "Secondary", varName: "--gradient-via", defaultColor: "#9333ea" }, // purple-600
  { name: "Accent", varName: "--gradient-to", defaultColor: "#c026d3" },    // fuchsia-600
];

export default function ColorSwitcher() {
  const [picked, setPicked] = useState<Record<string,string>>(
    Object.fromEntries(vars.map(v => [v.varName, v.defaultColor]))
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, varName: string) => {
    const val = e.target.value;
    document.documentElement.style.setProperty(varName, val);
    setPicked(prev => ({ ...prev, [varName]: val }));
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 glass bg-white/30 backdrop-blur-md border border-white/50 rounded-lg shadow-lg space-y-3">
      <h4 className="font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
        Color Theme
      </h4>
      {vars.map(({ name, varName }) => (
        <div key={varName} className="flex items-center gap-2">
          <label className="flex-1 text-gray-700">{name}</label>
          <input
            type="color"
            value={picked[varName]}
            onChange={e => handleChange(e, varName)}
            className="w-8 h-8 p-0 border-0 rounded"
          />
        </div>
      ))}
    </div>
  );
}
