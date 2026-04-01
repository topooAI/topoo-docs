import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { getFumadocsSystemMDXComponents } from "@/fumadocs-system";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return getFumadocsSystemMDXComponents({
    ComponentPreview,
    ComponentSource,
    Link,
    ...components,
  });
}

export const useMDXComponents = getMDXComponents;
