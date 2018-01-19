import React, { Component } from 'react';

class Truns extends Component {
  render() {
    return (
      <div>
      <h4>TEST RUN FORM</h4>
      <form>
        Test Run ID: <input type="text" name="tr_id" /><br/>
        Test Runner Github ID: <input type="text" name="tr_user" /><br/>
        Test Run Timestamp: <input type="text" name="tr_id" /><br/>
        Test Run System: <input type="text" name="tr_sys" /><br/>
        Test Run Conditions: <input type="text" name="tr_cond" /><br/>
        Test Run Expectation: <input type=="text" name="tr_expect" /><br/>
        Test Run Actual: <input type="text" name="tr_actual" /><br/>
        Test Run Outcome: <input type="text" name="tr_outcome" /><br/>
        Test Run Screenshot: <input type="uploadfile" name="tr_outcome" /><br/>
        Test Run Repro Github ID: <input type="text" name="tr_repro_id" /><br/>
        <input type="submit" name="submit_tcase" />
      </form>

      </div>
    );
  }
}

export default Truns;

test-runner:
system:
test-conditions:
timestamp:
expected:
actual:
outcome:
screenshot:
reproducible: