---
title: Tag based masking
description: In IOMETE, the resource-based masking policy for Hive anonymizes data from a specific Hive column identified by the database, table, and column names. On the other hand, the tag-based masking policy anonymizes Hive column data based on tags and their associated attribute values linked to the Hive column.
---

In **IOMETE**, the resource-based masking policy for Hive anonymizes data from a specific Hive column identified by the database, table, and column names. On the other hand, the tag-based masking policy anonymizes Hive column data based on tags and their associated attribute values linked to the Hive column.

## Policy details

| Field               | Description                                                                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy Name         | Enter an appropriate policy name. This name cannot be duplicated across the system. This field is mandatory. The policy is enabled by default.                                                                                                                                          |
| Normal/Override     | Enables you to specify an override policy. When override is selected, the access permissions in the policy override the access permissions in existing policies. This feature can be used with Add Validity Period to create temporary access policies that override existing policies. |
| TAG                 | Provide the relevant tag name that should be applied.                                                                                                                                                                                                                                   |
| Description         | (Optional) Describe the purpose of the policy.                                                                                                                                                                                                                                          |
| Add Validity Period | Specify a start and end time for the policy.                                                                                                                                                                                                                                            |

## Allow Conditions

| Field        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Select Role  | Specify one or more roles for whom this policy should be applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Select Group | Specify one or more groups for whom this policy should be applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Select User  | Specify one or more users for whom this policy should be applied                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Permissions  | To create a masking filter for the specified users, groups, and roles, click Select Masking Option, then select a masking type: <br/> - **Redact** – mask all alphabetic characters with "x" and all numeric characters with "n". <br /> - **Partial mask**: show last 4 – Show only the last four characters. <br />- **Partial mask**: show first 4 – Show only the first four characters. <br />- **Hash** – Replace all characters with a hash of entire cell value. <br />- **Nullify** – Replace all characters with a NULL value. <br />- **Unmasked** (retain original value) – No masking is applied. <br />- **Date: show only year** – Show only the year portion of a date string and default the month and day to 01/01 <br />- **Custom** – Specify a custom masked value or expression. Custom masking can use any valid Hive UDF (Hive that returns the same data type as the data type in the column being masked). Masking conditions are evaluated in the order listed in the policy. The condition at the top of the Masking Conditions list is applied first, then the second, then the third, and so on. |

:::info
To add additional conditions, click on the `Add new condition` button. The conditions are evaluated in the order they appear in the policy. The top condition is applied first, followed by the second, third, and so on.
:::

:::info
Additionally, you can use `Deny All Other Accesses` to block access for all users, groups, and roles not explicitly specified in the allow conditions of the policy. This ensures that only those specified in the allow conditions are granted access, and all others are denied access.
:::