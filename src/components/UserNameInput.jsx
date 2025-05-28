import { useContext } from "react";
import { UserContext } from "../Context/GithubApiContext";

const isValidHex = (hex) => /^#([0-9A-F]{6})$/i.test(hex);

const UserNameInput = () => {
  const { userName, setUserName, themeColor, setThemeColor } =
    useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", userName, themeColor);
  };

  const handleColorTextChange = (e) => {
    const val = e.target.value;
    setThemeColor(val);
  };

  const handleColorPickerChange = (e) => {
    const color = e.target.value;
    setThemeColor(color);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center gap-4"
    >
      <div className="textInfo w-full flex flex-col items-start justify-center gap-1">
        <label htmlFor="username" className="text-sm font-semibold">
          Enter User Name
        </label>
        <input
          type="text"
          id="username"
          required
          autoComplete="off"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="@username"
          className="outline-none border w-full text-[1rem] rounded-md px-2.5 py-1.5 bg-main border-main-border"
        />
      </div>

      <div className="textInfo w-full flex flex-col items-start justify-center gap-1">
        <label htmlFor="templateColor" className="text-sm font-semibold">
          Select Template Color
        </label>
        <div className="w-full flex flex-col items-start gap-1">
          <div className="flex items-center w-full rounded-md overflow-hidden border border-main-border bg-main">
            <input
              type="color"
              id="templateColor"
              required
              autoComplete="off"
              value={isValidHex(themeColor) ? themeColor : "#000000"}
              onChange={handleColorPickerChange}
              className="pl-2 border-none cursor-pointer"
            />
            <input
              type="text"
              value={themeColor}
              onChange={handleColorTextChange}
              placeholder="#ffffff"
              className="flex-1 px-3 py-2 text-[1rem] outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="textInfo w-full flex flex-col items-start justify-center gap-1">
        <label htmlFor="templateColor" className="text-sm font-semibold">
          Select Emoji
        </label>
        <div className="w-full flex flex-col items-start gap-1">
          
        </div>
      </div>

      <button
        className="submitButton hover:bg-button-hover-bg transition-colors duration-300 bg-button-bg cursor-pointer rounded-md text-white font-semibold px-2.5 py-1.5 text-[1rem]"
        type="submit"
      >
        Create Card
      </button>
    </form>
  );
};

export default UserNameInput;
