## Tutorial

1. To create a Typescript template npx create-react-app tutorial-app --template typescript

## Project Structure

src/index.tsx - It is the root file

components - It is the folder for all the components, create a sepearate folder each component with index.ts file for export and component file and a style file.

pages - all the pages in application i.e router related components

containers - container components for each page and the components are added within these containers

shared - common packages like utils

global - for common styles

graphql - folder for all graphql queries with separate folders for each component

## Imports Order

- All the third party packages on top
- imports from other folders(alphabetical)
- imports from same folder

##

## Application Overview

We will create a simple application Blog Post where users can create an account and add a post and follow other users to get post notifications and view their posts

    - Pages
        - Login / Register
        - Home (all posts)
        - Profile
        - Followers / Following

    - Containers
        - NavContainer
        - LoginContainer / RegisterContainer
        - HomeContainer
        - PostsContainer
        - ProfileContainer
        - FollowersContainer / FollowingContainer

    - Components
        - HeaderComponent
        - LogoComponent
        - MenuComponent
        - LoginComponent / RegisterComponent
        - PostComponent
        - ProfileComponent
        - FollowersComponent/FollowingComponent

    - Shared components
        - Input
        - Button
        - Modal
        - Alert

    - Global
        styles.css
        constants.ts

    - Graphql
        -
        - queries.ts (for each feature)
