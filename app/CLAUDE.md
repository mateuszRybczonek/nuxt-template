# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## CSS Customization

- Prefer Tailwind classes over custom css
- Use PrimeVue theme customization when necessary
- Use PrimeVue PassThrough classes to apply custom styles to PrimeVue components
- Avoid adding custom css files unless absolutely necessary
- Minimize the use of !important in css rules
- Document any custom css rules with comments explaining their purpose
- Regularly review and refactor custom css to ensure it remains maintainable and efficient
- When creating custom css classes, use descriptive names that clearly indicate their purpose

## Vue

- Keep components small and focused on a single responsibility
- Try to decompose large components into smaller, reusable components
- Use the Composition API and composables for shared logic
- Avoid using provide/inject unless absolutely necessary

## TypeScript

- Prefer using a top-level type-only import instead of inline type specifiers
- Use strict typing wherever possible
- Define interfaces for complex objects and API responses
- Avoid using 'any' type unless absolutely necessary
- Use type assertions sparingly and only when you are certain of the type
- Document complex types and interfaces with comments explaining their purpose and usage
- Use enums for sets of related constants to improve code readability and maintainability
- Ensure that function signatures are clear and descriptive, including parameter and return types
- Avoid deep nesting of types to maintain readability

## General

- Check existing utils and composables before creating new ones not to duplicate code
- Prioritize code readability and maintainability over clever or complex solutions
- Always use descriptive variable names
- Always use PascalCase with `k` prefix for constants
- Always try to extract common logic into utils
- Try to use composables for components shared logic
