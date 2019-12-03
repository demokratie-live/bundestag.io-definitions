import { CONFERENCEWEEKDETAIL, NAMEDPOLL, PROCEDURE } from './';
import { assert } from 'chai';
import 'mocha';

describe('index.js exports Definitions', () => {
    describe('CONFERENCEWEEKDETAIL',() => {
        it('TOPIC.FIND_BERATUNG_ANTRAG', async () => {
            assert.strictEqual(CONFERENCEWEEKDETAIL.TOPIC.FIND_BERATUNG_ANTRAG instanceof RegExp, true)
        });
    })
    describe('NAMEDPOLL',() => {
        it('TITLE.FIND_AENDERUNGSANTRAG_OR_ENTSCHLIESSUNGSANTRAG_OR_EINSPRUCH', async () => {
            assert.strictEqual(NAMEDPOLL.TITLE.FIND_AENDERUNGSANTRAG_OR_ENTSCHLIESSUNGSANTRAG_OR_EINSPRUCH instanceof RegExp, true)
        });
    })
    describe('PROCEDURE',() => {
        it('STATUS.BR_ZUGELEITET_NICHT_BERATEN', async () => {
            assert.strictEqual(PROCEDURE.STATUS.BR_ZUGELEITET_NICHT_BERATEN, 'Dem Bundesrat zugeleitet - Noch nicht beraten')
        });
    })
});