import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from 'react';

const ShiftChangeForm = () => {
  const [formResponses, setFormResponses] = useState({
    name: '',
    shiftChange: '',
    swappingWith: '',
    giveUpDay: '',
    giveUpTime: '',
    takeDay: '',
    takeTime: '',
  });

  const [validated, setValidated] = useState(false);
  const [dayChange, setDayChange] = useState('');
  const [dayChange2, setDayChange2] = useState('');
  const [selectChange, setSelectChange] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const nameRef = useRef();
  const otherNameRef = useRef();
  const timeRef = useRef();
  const timeRef2 = useRef();
  const dayRef = useRef();
  const dayRef2 = useRef();

  useEffect(() => {
    if (formResponses.shiftChange === 'Swap') {
      setFormResponses({
        ...formResponses,
        giveUpTime: timeRef.current.firstChild.value,
        takeTime: timeRef2.current.firstChild.value,
      });
      setSelectChange(timeRef2.current.firstChild.value);
    } else {
      if (!formSubmitted) {
        setFormResponses({
          ...formResponses,
          giveUpTime: timeRef.current.firstChild.value,
        });
      }
    }
  }, [dayChange, dayChange2]);

  useEffect(() => {
    if (formResponses.shiftChange === 'Swap') {
      console.log(timeRef2.current.firstChild.value);
      setFormResponses({
        ...formResponses,
        takeTime: timeRef2.current.firstChild.value,
      });
    }
  }, [selectChange]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (formResponses.name == '') {
      nameRef.current.firstChild.setCustomValidity('Select a name');
    }
    if (formResponses.swappingWith == '') {
      otherNameRef.current.firstChild.setCustomValidity('Select a name');
    }
    if (formResponses.shiftChange == 'Swap' && formResponses.takeTime == '') {
      timeRef2.current.firstChild.setCustomValidity('Pick a time');
    }
    if (formResponses.giveUpTime == '' || formResponses.giveUpTime == 'true') {
      timeRef.current.firstChild.setCustomValidity('Pick a time');
    }
    if (formResponses.shiftChange == 'Swap' && formResponses.takeDay == '') {
      dayRef2.current.firstChild.setCustomValidity('Pick a time');
    }
    if (formResponses.giveUpDay == '') {
      dayRef.current.firstChild.setCustomValidity('Pick a time');
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setFormSubmitted(true);

    emailjs
      .send(
        'service_1vw76um',
        'template_n9en9sp',
        formResponses,
        'user_wJ5IIawclAEmWJ073b9vj'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  return formSubmitted ? (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <h4 style={{ textAlign: 'center' }}>
            {' '}
            Your response has been recorded
          </h4>
        </div>
        <div style={{ height: '400px' }} />
      </div>
    </div>
  ) : (
    <div className='container'>
      <div className='row'>
        <div className='col-9 mx-auto'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <div ref={nameRef}>
                <Form.Control
                  as='select'
                  required
                  onChange={(e) => {
                    setFormResponses({
                      ...formResponses,
                      name: e.target.value,
                    });
                    e.target.setCustomValidity('');
                  }}
                >
                  <option disabled selected value>
                    {' '}
                    -- Select Your Name --{' '}
                  </option>
                  <option>Kim</option>
                  <option>Leah</option>
                  <option>Timmy</option>
                  <option>Xochitl</option>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                  Select a Name
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>I Would Like To:</Form.Label>
              <Form.Check
                required
                type='radio'
                label='Give Up Shift'
                name='formQuestionRadios'
                id='formQuestionRadios1'
                onChange={() => {
                  setFormResponses({
                    ...formResponses,
                    shiftChange: 'Give Up',
                  });
                }}
              />
              <Form.Check
                type='radio'
                label='Swap Shift'
                name='formQuestionRadios'
                id='formQuestionRadios1'
                onChange={() => {
                  setFormResponses({
                    ...formResponses,
                    shiftChange: 'Swap',
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Who are you swapping shifts with?:</Form.Label>
              <div ref={otherNameRef}>
                <Form.Control
                  as='select'
                  required
                  onChange={(e) => {
                    setFormResponses({
                      ...formResponses,
                      swappingWith: e.target.value,
                    });
                    e.target.setCustomValidity('');
                  }}
                >
                  <option disabled selected value>
                    {' '}
                    -- Select A Name --{' '}
                  </option>
                  {formResponses.name !== 'Kim' && <option>Kim</option>}
                  {formResponses.name !== 'Leah' && <option>Leah</option>}
                  {formResponses.name !== 'Timmy' && <option>Timmy</option>}
                  {formResponses.name !== 'Xochitl' && <option>Xochitl</option>}
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Which Shift are You Giving Up?</Form.Label>
              <Form.Row>
                <Col>
                  <div ref={dayRef}>
                    <Form.Control
                      as='select'
                      required
                      onChange={(e) => {
                        setFormResponses({
                          ...formResponses,
                          giveUpDay: e.target.value,
                        });
                        setDayChange(e.target.value);
                        e.target.setCustomValidity('');
                      }}
                    >
                      <option disabled selected value>
                        {' '}
                        -- Select A Day --{' '}
                      </option>
                      <option>Sunday</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Saturday</option>
                    </Form.Control>
                  </div>
                </Col>
                <Col>
                  <div ref={timeRef}>
                    <Form.Control
                      as='select'
                      required
                      onChange={(e) => {
                        setFormResponses({
                          ...formResponses,
                          giveUpTime: e.target.value,
                        });
                        e.target.setCustomValidity('');
                        setSelectChange(
                          e.target.value + ' from first time box'
                        );
                      }}
                    >
                      <option disabled selected value>
                        {' '}
                        -- Select A Time --{' '}
                      </option>
                      {formResponses.giveUpDay !== 'Saturday' ? (
                        <>
                          <option>5:30</option>
                          <option>8:30</option>
                        </>
                      ) : (
                        <>
                          <option>7:00</option>
                          <option>9:30</option>
                        </>
                      )}
                    </Form.Control>
                  </div>
                </Col>
              </Form.Row>
            </Form.Group>
            {formResponses.shiftChange == 'Swap' ? (
              <div>
                <Form.Group>
                  <Form.Label>Which Shift are You Taking?</Form.Label>
                  <Form.Control.Feedback type='invalid'>
                    Select a different time
                  </Form.Control.Feedback>
                  <Form.Row>
                    <Col>
                      <div ref={dayRef2}>
                        <Form.Control
                          as='select'
                          required
                          onChange={(e) => {
                            setFormResponses({
                              ...formResponses,
                              takeDay: e.target.value,
                            });
                            setDayChange2(e.target.value);
                            e.target.setCustomValidity('');
                          }}
                        >
                          <option disabled selected value>
                            {' '}
                            -- Select A Day --{' '}
                          </option>
                          <option>Sunday</option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Saturday</option>
                        </Form.Control>
                      </div>
                    </Col>
                    <Col>
                      <div ref={timeRef2}>
                        <Form.Control
                          as='select'
                          required
                          onChange={(e) => {
                            setFormResponses({
                              ...formResponses,
                              takeTime: e.target.value,
                            });
                            e.target.setCustomValidity('');
                          }}
                        >
                          <option disabled selected value>
                            {' '}
                            -- Select A Time --{' '}
                          </option>
                          {formResponses.takeDay !== 'Saturday' ? (
                            <>
                              {formResponses.giveUpDay ==
                                formResponses.takeDay &&
                              formResponses.giveUpTime == '5:30' ? (
                                <></>
                              ) : (
                                <option>5:30</option>
                              )}
                              {formResponses.giveUpDay ==
                                formResponses.takeDay &&
                              formResponses.giveUpTime == '8:30' ? (
                                <></>
                              ) : (
                                <option>8:30</option>
                              )}
                            </>
                          ) : (
                            <>
                              {formResponses.giveUpDay ==
                                formResponses.takeDay &&
                              timeRef.current.firstChild.value == '7:00' ? (
                                <></>
                              ) : (
                                <option>7:00</option>
                              )}
                              {formResponses.giveUpDay ==
                                formResponses.takeDay &&
                              timeRef.current.firstChild.value == '9:30' ? (
                                <></>
                              ) : (
                                <option>9:30</option>
                              )}
                            </>
                          )}
                        </Form.Control>
                      </div>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </div>
            ) : (
              <div></div>
            )}
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
          <div style={{ height: '400px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ShiftChangeForm;
