import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
/* import { ReactQueryDevtools } from "react-query/devtools"; */
import App from "./App";
import GlobalStyles from "./GlobalStyles.style";

const queryClient = new QueryClient();

const container = document.getElementById("root");

const root = createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
