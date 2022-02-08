import { useState } from "react";

import { FullscreenIcon, FullscreenExitIcon } from "../../../../ui";

import { useMap } from "react-leaflet";

import { api } from "../../../../api/api";

import { Button } from "../../../../ui";

export default function Fullscreen(): JSX.Element {
  const map = useMap();

  // TODO: need to trap the exit full screen event by ESC to arrange the fs state and icon
  const [fs, setFs] = useState(false);
  function setFullscreen() {
    setFs(!fs);
    api.map(map.id).toggleFullscreen(map.getContainer());
  }

  return (
    <Button
      id="fullscreen"
      type="icon"
      tooltip="mapnav.fullscreen"
      tooltipPlacement="left"
      icon={!fs ? <FullscreenIcon /> : <FullscreenExitIcon />}
      onClick={setFullscreen}
    />
  );
}
