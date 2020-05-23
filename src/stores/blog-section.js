import { sections } from '../util/enums.js'
import { writable } from 'svelte/store'

const actualSection = writable(sections.WORKSHOP)

export default actualSection