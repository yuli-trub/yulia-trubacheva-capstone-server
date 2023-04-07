import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";

const avatar = createAvatar(funEmoji, {
  seed: "Felix",
});

const svg = avatar.toString();
