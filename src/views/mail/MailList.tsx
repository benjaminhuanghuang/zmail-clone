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

  const showDetail = useMemo(
    () => viewMode !== "default" || outlet,
    [viewMode, outlet]
  );
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
    <div className="h-full">
      <ResizablePanelGroup direction={direction}>
        <ResizablePanel>{showMailList && <MailBox />}</ResizablePanel>
        <ResizableHandle className={`${!showDetail ? "hidden" : ""}`} />
        <ResizablePanel className={`${!showDetail ? "hidden" : ""}`}>
          {outlet ||
            (showDetail && (
              <div className="flex flex-col w-full h-full items-center justify-center">
                <img
                  src="/mailbox-graphic.svg"
                  width={128}
                  height={170}
                  alt="Mailbox"
                />
                <div className="pt-2 text-center text-sm">No mail selected</div>
              </div>
            ))}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MailList;
