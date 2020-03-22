//create a unique
import { v5 as uuidv5 } from 'uuid'; // For version 5

//impure function
export default function createProjectId() {
  const uuid = uuidv5('https://transparencygroup.nz/', uuidv5.URL);
  return uuid
}
