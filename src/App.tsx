import { useMemo, useState } from "react";

import DashboardView from "./Views/DashboardView/DashboardView";
import DownTimeView from "./Views/DownTimeView";
import EfficiencyView from "./Views/EfficiencyView/EfficiencyView";
import ShiftView from "./Views/ShiftView/ShiftView";
import Logo from "./components/Logo/Logo";
import MetricTable from "./components/MetricsTable/MetricsTable";
import Selector from "./components/Selector/Selector";
import { capitalize } from "./components/utils/utils";
import { Categories, DEFAULT_CATEGORY } from "./constants/global";
import { StyledApp } from "./styles/global.styles";
import { Metric } from "./types/data";

const metricsData: Metric[] = require("./data.json").data;
console.log(metricsData);

function App() {
  const [highlightedMetric, setHighlightedMetric] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const filteredData = useMemo(
    () =>
      selectedCategory === DEFAULT_CATEGORY
        ? metricsData
        : metricsData.filter((metric) => metric.category === selectedCategory),
    [selectedCategory]
  );

  const options = useMemo(
    () => Array.from(new Set(metricsData.map((metric) => metric.category))),
    []
  );

  return (
    <StyledApp>
      <Logo />
      <h1>Factory Metrics Dashboard - {capitalize(selectedCategory)}</h1>

      <Selector
        options={options}
        onChange={handleCategoryChange}
        selected={selectedCategory}
      />
      <div>
        {selectedCategory === Categories.efficiency && (
          <EfficiencyView
            metrics={filteredData}
            highlight={highlightedMetric}
            onHighlight={setHighlightedMetric}
          />
        )}
        {selectedCategory === Categories.shift && (
          <ShiftView
            metrics={filteredData}
            highlight={highlightedMetric}
            onHighlight={setHighlightedMetric}
          />
        )}
        {selectedCategory === Categories.downtime && (
          <DownTimeView
            metrics={filteredData}
            highlight={highlightedMetric}
            onHighlight={setHighlightedMetric}
          />
        )}

        {!(selectedCategory in Categories) && (
          <DashboardView
            metrics={filteredData}
            highlight={highlightedMetric}
            onHighlight={setHighlightedMetric}
          />
        )}
      </div>

      <MetricTable
        data={filteredData}
        highlight={highlightedMetric}
        onHighlight={setHighlightedMetric}
      />
    </StyledApp>
  );
}

export default App;
