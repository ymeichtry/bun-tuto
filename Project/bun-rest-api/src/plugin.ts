import { Elysia } from 'elysia'

// Define Plugin
export const plugin = new Elysia()
.state('plugin-version', 1)
.get('/form-plugin', () => 'Hi')
.get('/greet', () => 'Hello Dev!')
