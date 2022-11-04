import { Layout } from "@/components/layout/Layout";
import { Home } from "@/components/pages/index";

import type { NextPageWithLayout } from "./_app";

const IndexPage: NextPageWithLayout = () => <Home />;

IndexPage.getLayout = (page) => <Layout>{page}</Layout>;

export default IndexPage;
