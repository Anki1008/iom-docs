/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually


    getting_started: [
        {
            type: "category",
            label: "Overview",
            collapsed: false,
            items: ["getting-started/what-is-iomete"],
        },
        {
            type: "category",
            label: "Community Deployment",
            collapsed: false,
            items: [
                "community-deployment/overview",
                {
                    type: "category",
                    label: "AWS",
                    collapsed: true,
                    items: [
                        "community-deployment/aws/install",
                        "community-deployment/aws/upgrade",
                        "community-deployment/aws/changelog",
                        "community-deployment/aws/permissions",
                        "community-deployment/aws/data-plane-cost",
                    ],
                },
                {
                    type: "category",
                    label: "Azure",
                    collapsed: true,
                    items: ["community-deployment/azure/install", "community-deployment/azure/upgrade"],
                },
                {
                    type: "category",
                    label: "GCP",
                    collapsed: true,
                    items: ["community-deployment/gcp/install", "community-deployment/gcp/upgrade"],
                },
                {
                    type: "category",
                    label: "On-Premise",
                    collapsed: true,
                    items: ["community-deployment/on-prem/life-cycle-management"],
                },
            ],
        },
    ],

    guides: [
        {
            type: "category",
            label: "Documentation",
            collapsed: false,
            items: ["intro", "intro/platform"],
        },
        {
            type: "category",
            label: "User Guide",
            collapsed: false,
            items: [
                "user-guide/virtual-lakehouses",
                "user-guide/private-docker-registry",
                "user-guide/create-a-personal-access-token",
                // "user-guide/create-ssh-tunnel",
                "user-guide/sql-editor",
            ],
        },

        {
            type: "category",
            label: "Data Sources",
            collapsed: false,
            items: [
                "data-sources/jdbc-sources",
                "data-sources/snowflake-connector",
                "data-sources/csv-files",
                "data-sources/json-files",
                "data-sources/parquet-files",
                "data-sources/orc-files",
            ],
        },
        {
            type: "category",
            label: "Data Security",
            collapsed: false,
            items: [
                "data-security/overview",
                "data-security/access",
                "data-security/masking",
                "data-security/row-level-filter",
                "data-security/tag-based-access",
                "data-security/tag-based-masking",
            ],
        },

        {
            type: "category",
            label: "Spark Jobs",
            collapsed: false,
            items: [
                "spark-job/getting-started",
                "spark-job/spark-application-config",
                "spark-job/iomete-sdk",
                "spark-job/airflow",
                "spark-job/ingesting-data",
            ],
        },
        {
            type: "category",
            label: "Jupyter Notebook",
            collapsed: false,
            items: ["notebook/starting-with-notebook", "notebook/using-vscode"],
        },
        {
            type: "category",
            label: "Client & Libraries",
            collapsed: false,
            items: ["libraries/drivers/sql-alchemy-driver", "libraries/drivers/jdbc-driver"],
        },
        {
            type: "category",
            label: "Misc",
            collapsed: false,
            items: ["misc/datagrip-lakehouse-connection"],
        },
        {
            type: "category",
            label: "Integrations",
            collapsed: false,
            items: ["integrations/airbyte"],
        },
    ],
    integrations: [
        {
            type: "category",
            label: "DBT",
            collapsed: false,
            items: [
                "guides/dbt/getting-started-with-iomete-dbt",
                "guides/dbt/dbt-materializations",
                "guides/dbt/dbt-incremental-models",
                "guides/dbt/dbt-incremental-models-by-examples",
            ],
        },
        {
            type: "category",
            label: "BI Integrations",
            collapsed: false,
            items: [
                // 'guides/connection-options',
                "guides/how-to-connect-iomete-and-metabase-bi",
                "guides/how-to-connect-iomete-and-apache-superset",
                "guides/power-bi",
                "guides/iomete-tableau-integration",
                "guides/iomete-redash-connection",
            ],
        },
    ],

    reference: [
        {
            type: "category",
            label: "SQL Quick Start",
            collapsed: false,
            items: [
                "sql-quick-start/sql-ddl-examples",
                "sql-quick-start/dml-operations",
                "sql-quick-start/iceberg-advanced-features",
                "sql-quick-start/tables-from-jdbc-csv-json",
                "sql-quick-start/query-federation",
            ],
        },
        {
            type: "category",
            label: "Iceberg Tables",
            collapsed: false,
            items: [
                "iceberg-tables/getting-started",
                "iceberg-tables/ddl",
                "iceberg-tables/queries",
                "iceberg-tables/writes",
                "iceberg-tables/iceberg-procedures",
                "iceberg-tables/time-travel",
                "iceberg-tables/maintenance",
            ],
        },
        {
            type: "category",
            label: "Spark SQL Reference",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "DDL",
                    collapsed: true,
                    items: [
                        "spark-sql/ddl/create-database",
                        "spark-sql/ddl/alter-database",
                        "spark-sql/ddl/drop-database",
                        "spark-sql/ddl/create-table",
                        "spark-sql/ddl/alter-table",
                        // 'spark-sql/ddl/drop-table',
                        "spark-sql/ddl/create-view",
                        // "spark-sql/ddl/sql-ddl-examples",
                        // 'spark-sql/ddl/drop-view'
                    ],
                },
                {
                    type: "category",
                    label: "Writes",
                    collapsed: true,
                    items: [
                        "spark-sql/writes/truncate-table",
                        "spark-sql/writes/insert-into",
                        "spark-sql/writes/merge-into",
                        "spark-sql/writes/insert-overwrite",
                    ],
                },
                {
                    type: "category",
                    label: "Queries",
                    collapsed: true,
                    items: [
                        "spark-sql/queries/select",
                        "spark-sql/queries/cte",
                        "spark-sql/queries/cluster-by-clause",
                        "spark-sql/queries/distribute-by-clause",
                        "spark-sql/queries/group-by-clause",
                        "spark-sql/queries/having-by-clause",
                        "spark-sql/queries/hints",
                        "spark-sql/queries/inline-table",
                        "spark-sql/queries/file",
                        "spark-sql/queries/join",
                        "spark-sql/queries/like-predicate",
                        "spark-sql/queries/limit-clause",
                        "spark-sql/queries/order-by-clause",
                        "spark-sql/queries/set-operators",
                        "spark-sql/queries/sort-by-clause",
                        "spark-sql/queries/sampling-queries",
                        "spark-sql/queries/table-valued-functions",
                        "spark-sql/queries/use-database",
                        "spark-sql/queries/where-clause",
                        "spark-sql/queries/window-functions",
                        "spark-sql/queries/case-clause",
                        "spark-sql/queries/pivot-clause",
                        "spark-sql/queries/literal-view-clause",
                        "spark-sql/queries/transform",
                    ],
                },
                "spark-sql/auxiliary-statements/cache",
                "spark-sql/column-types",
                "spark-sql/datetime-patterns",
                "spark-sql/identifiers",
                "spark-sql/operators",
                "spark-sql/literals",
                "spark-sql/null-semantics",
                "spark-sql/functions",
            ],
        },
        {
            type: "category",
            label: "Pyspark",
            collapsed: false,
            items: ["pyspark-reference/pyspark-join"],
        },
        {
            type: "category",
            label: "Open Source Spark Jobs",
            collapsed: false,
            items: [
                "open-source-spark-jobs/data-compaction-job",
                "open-source-spark-jobs/query-scheduler-job",
                "open-source-spark-jobs/mysql-database-replication-job",
                "open-source-spark-jobs/kafka-streaming",
                "open-source-spark-jobs/file-streaming",
            ],
        },
    ],

    tutorials: [
        {
            type: "category",
            label: "Sync",
            collapsed: false,
            items: [
                "guides/read-files-from-aws-s3",
                "guides/sync-data-from-jdbc-sources",
                "guides/sync/export-as-a-csv-file",
                "guides/external-s3-buckets-access",
            ],
        },
    ],
};

export default sidebars;
