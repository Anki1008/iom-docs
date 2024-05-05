import React from "react";
import Translate from "@docusaurus/Translate";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import { GithubLogo } from "@phosphor-icons/react";
import "./styles.scss";
export default function EditThisPage({ editUrl }) {
  return (
    <Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
      <GithubLogo weight="bold" />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page"
      >
        Edit this page
      </Translate>
    </Link>
  );
}
