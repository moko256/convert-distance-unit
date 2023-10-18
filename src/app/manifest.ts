import { MetadataRoute } from "next";
import { manifest_icons } from "./manifest_icons";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Distance Converter",
    short_name: "Distance Converter",
    icons: manifest_icons(),
    theme_color: "#1e3a8a",
    background_color: "#1e3a8a",
    start_url: "./",
    display: "standalone",
  };
}
