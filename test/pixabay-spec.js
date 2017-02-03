'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import pixabay from '../src/index';
import ResultList from '../src/result-list';


const {expect} = chai;

chai.use(chaiAsPromised);
chai.use(sinonChai);

const key = 'key';

describe('Pixabayjs', function() {
  this.timeout(30000);
  let client;

  beforeEach(function() {
    client = Object.create(pixabay);
  });

  afterEach(function() {
    client = null;
  });

  describe('authenticate', function() {
    it('sets the client\'s key', function() {
      client.authenticate(key);
      expect(client._auth.key).to.equal(key);
    });
  });

  describe('imageResultList', function() {
    const search = ['dogs', 'puppies'];

    it('returns a ResultList', function() {
      expect(client.imageResultList(search)).to.be.instanceof(ResultList);
    });

    it('uses the image url', function() {
      const spy = sinon.spy(client, '_makeConfig');
      client.imageResultList(search);
      expect(spy).to.be.calledWith('https://pixabay.com/api');
    });
  });
});
