import { normalize, schema } from 'normalizr';

export const normalizeArray = (data, idAttribute = 'date') => {
    const itemsSchema = new schema.Entity('items', undefined, { idAttribute });
    const normalized = normalize(data, [itemsSchema]);
    return { items: normalized.entities.items || {}, ids: normalized.result };
};

export default { normalizeArray };