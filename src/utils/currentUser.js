import Chance from 'chance'
import uuid from 'uuid/v4'

const chance = new Chance();

export const formatCurrentName = name => `> ${name} <`;

export default {
    name: chance.first(),
    id: uuid(),
};
