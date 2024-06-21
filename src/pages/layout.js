import { Karla } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { AssessmentProvider } from "../context/AssessmentContext";
const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

export const metadata = {
  title: "SBC CMS",
  description: "Seven-up",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <AuthProvider>
          <AssessmentProvider>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </AssessmentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
