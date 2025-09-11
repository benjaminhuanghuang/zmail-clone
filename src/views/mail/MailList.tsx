/*
Render the list of emails in list view, vertical split view, and horizontal split view.

The mail detail view is rendered as the outlet of react-router-dom.
*/

import { useMemo } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { useAppSelector } from "@/store";
import { useOutlet } from "react-router-dom";
import MailBox from "./components/MailBox";

const MailList = () => {
  const viewMode = useAppSelector((state) => state.viewMode.mode);
  const outlet = useOutlet();

  const showMailList = useMemo(() => !outlet, [outlet]);
  const direction = useMemo(() => {
    switch (viewMode) {
      case "vertical_split":
        return "horizontal";
      case "horizontal_split":
        return "vertical";
      default:
        return "horizontal";
    }
  }, [viewMode]);

  return (
    <>
      <ResizablePanelGroup direction={direction}>
        <ResizablePanel>{showMailList && <MailBox />}</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>{outlet}</ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default MailList;
