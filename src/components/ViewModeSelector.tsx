import { useCallback, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { ChevronDown, List, Columns2, Rows2 } from "lucide-react";
// Redux
import { useDispatch } from "react-redux";
import { setViewMode } from "@/store/features/viewMode/viewModeSlice";
import { useAppSelector } from "@/store";
import type { ViewMode } from "@/store/features/viewMode/types";

const ViewModeSelector = () => {
  // useAppSelector can give correct type inference
  const viewMode = useAppSelector((state) => state.viewMode.mode);

  const icon = useMemo(() => {
    switch (viewMode) {
      case "vertical_split":
        return <Columns2 className="h-4 w-4" />;
      case "horizontal_split":
        return <Rows2 className="h-4 w-4" />;
      default:
        return <List className="h-4 w-4" />;
    }
  }, [viewMode]);

  const dispatch = useDispatch();

  const handleViewModeChange = useCallback(
    (mode: ViewMode) => {
      dispatch(setViewMode(mode));
    },
    [dispatch]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {icon}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={viewMode}
          onValueChange={(val) => handleViewModeChange(val as typeof viewMode)}
        >
          <DropdownMenuRadioItem value="default">
            List view
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="vertical_split">
            Vertical split view
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="horizontal_split">
            Horizontal split view
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ViewModeSelector;
