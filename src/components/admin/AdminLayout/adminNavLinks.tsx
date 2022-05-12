import TableBarIcon from "@mui/icons-material/TableBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const adminNavLinks = [
  {
    route: "/admin/dashboard",
    icon: <DashboardRoundedIcon />,
    label: "Dashboard",
  },
  {
    route: "/admin/products",
    icon: <MenuBookIcon />,
    label: "Gestione Menu",
  },
  {
    route: "/admin/assign_tables",
    icon: <TableBarIcon />,
    label: "Gestione Tavoli",
  },
  {
    route: "/admin/analytics",
    icon: <AnalyticsIcon />,
    label: "Statistiche",
  },
  {
    route: "/admin/settings",
    icon: <ManageAccountsIcon />,
    label: "Impostazioni",
  },
];

export default adminNavLinks;
