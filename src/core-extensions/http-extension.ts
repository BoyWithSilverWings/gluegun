import { create } from 'apisauce'
import { GluegunToolbox } from '../domain/toolbox'

/**
 * An extension to talk to ye olde internet.
 *
 * @param toolbox The running toolbox.
 */
export default function attach(toolbox: GluegunToolbox): void {
  toolbox.http = { create }
}
