import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                padding: 0;
                margin: 0;
                background: white;
                min-height: 100%;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            },
            a {
                color: inherit;
                text-decoration: none;
            }
        `}
    />
)

