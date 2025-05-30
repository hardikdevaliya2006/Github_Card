import { createContext, useEffect, useState } from "react";
import emojiApi from "../api/emojiApi";

export const EmojiApiContext = createContext();

export const EmojiApiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState([]);
  const [emojiLoading, setEmojiLoading] = useState(true);

  const fetchEmoji = async () => {
    try {
      const res = await emojiApi.get("/emojis");
      setEmoji(res.data);
    } catch (error) {
      console.log(error);
      setEmoji([]);
    } finally {
      setEmojiLoading(false);
    }
  };

  useEffect(() => {
    fetchEmoji();
  }, []);

  return (
    <EmojiApiContext.Provider value={{ fetchEmoji, emoji, emojiLoading }}>
      {children}
    </EmojiApiContext.Provider>
  );
};
