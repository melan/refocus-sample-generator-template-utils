/**
 * testTransform.js
 */
const expect = require('chai').expect;
const helpers = require('./transform.js').helpers;
const tu = require('../utils/testUtils');

describe('transform tests >', () => {
  before(tu.buildTransform);

  /**
   * Set up data to be used in the tests.
   */
  const aspect1 = {
    name: 'aspect1',
    timeout: '60s',
  };
  const subject1 = {
    absolutePath: 'root.node.subject1',
  };
  const subject2 = {
    absolutePath: 'root.node.subject2',
  };
  const ctx = {};
  const aspects = [aspect1];
  const subjects = [subject1, subject2];
  const res = {};

  /**
   * Transform
   *
   * Execute your transform function with doTransform and check that the returned
   * samples have the expected values. doTransform includes validation - you can
   * assume the result is an array of valid sample objects.
   */
  /*
  describe('transform >', () => {
    // bulk
    it('transform', () => {
      const samples = tu.doTransform(ctx, aspects, subjects, res);
      expect(samples).to.be.an('array').with.length(2);
    });

    // by subject
    it('transform', () => {
      const samples = tu.doTransform(ctx, aspects, subject1, res);
      expect(samples).to.be.an('array').with.length(1);
    });
  });
  */

  /**
   * Error Handlers (optional)
   * Execute your errorHandlers with doTransform and check that the returned
   * samples have the expected values. doTransform includes validation - you
   * can assume the result is an array of valid sample objects.
   */
  /*
  describe('handle errors >', () => {
    // bulk
    it('handle errors - 404', () => {
      const res = { statusCode: 404 };
      const samples = tu.doTransform(ctx, aspects, subjects, res);
      expect(samples).to.be.an('array').with.length(2);
    });

    // by subject
    it('handle errors - 404', () => {
      const res = { statusCode: 404 };
      const samples = tu.doTransform(ctx, aspects, subject1, res);
      expect(samples).to.be.an('array').with.length(1);
    });
  });
  */

  /**
   * Response Schema
   *
   * Set up a mock response object and execute your schema against it with
   * validateResponse.
   */
  /*
  describe('response schema >', () => {
    it('valid response', () => {
      const res = {
        body: { ... },
      };

      expect(() => tu.validateResponse(res)).to.not.throw();
    });

    it('invalid response', () => {
      const res = {
        body: { ... },
      };

      expect(() => tu.validateResponse(res)).to.throw();
    });
  }
  */

  /**
   * Helpers (optional)
   *
   * Test helpers directly.
   */
  /*
  describe('helpers >', () => {
    it('generateSampleName', () => {
      const subject = {absolutePath: 'aaa.bbb.ccc'};
      const aspect = {name: 'ddd'};
      const sampleName = helpers.generateSampleName(subject, aspect);
      expect(sampleName).to.equal('aaa.bbb.ccc|ddd');
    });
  });
  */

});
