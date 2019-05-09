import React from 'react';
import './CSS-Card.css';
import nl2br from 'react-newline-to-break';

import './bootstrap-adhito-v1.css';
import './bootstrap.min.css';

import './bootstrap-jquery.js';


const Card = (props) => {
	return (
		<div className='cardDesc bg-white'>
		
				<img className="cardMallLogo" alt='photos'src={props.image}/>
				<h4 className="tc"> _____________________________ </h4>
				<h2 className="cardH2Font">{props.name} Adress </h2>
				<p> {props.address} </p>

				<h2 className="cardH2Font"> Open Time   </h2>
				<p> {props.opentime} </p>

				<h2 className="cardH2Font"> Floors Maps   </h2>
				<p> {props.floorDesc} </p>
				

				<div className=''>
					<img alt='Does not exist'src={props.floorUGPic}/>
					<h2> UG </h2>
					<p>{nl2br(props.floorUG)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floorGFPic}/>
					<h2> GF </h2>
					<p>{nl2br(props.floorGF)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor1stPic}/>
					<h2> 1ST </h2>
					<p>{nl2br(props.floor1st)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor2ndPic}/>
					<h2> 2ND </h2>
					<p>{nl2br(props.floor2nd)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor3rdPic}/>
					<h2> 3RD </h2>
					<p>{nl2br(props.floor3rd)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>

					<img alt='Does not exist'src={props.floor4thPic}/>
					<h2> 4TH </h2>
					<p>{nl2br(props.floor4th)}</p>
					<h2 className="tc"> _____________________________ </h2>
					<br></br>


				</div>

				<div>
            <h2 class="text-center "> EVENT SCHEDULE </h2>
            <div class="aboutEventSchedule">
                <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a data-scroll-ignore="" class="nav-link active" id="day-1-tab" data-toggle="pill" href="#day-1" role="tab" aria-controls="day-1" aria-selected="true">Day 1</a>
                  </li>
                  <li class="nav-item">
                    <a data-scroll-ignore="" class="nav-link" id="day-2-tab" data-toggle="pill" href="#day-2" role="tab" aria-controls="day-2" aria-selected="false">Day 2</a>
                  </li>
                  <li class="nav-item">
                      <a data-scroll-ignore="" class="nav-link" id="day-3-tab" data-toggle="pill" href="#day-3" role="tab" aria-controls="day-3" aria-selected="false">Day 3</a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="day-1" role="tabpanel" aria-labelledby="day-1-tab">
                    <div class="table-responsive">
                      <table class="table table-hover text-black">
                        <tbody>
                          <tr>
                            <th scope="row">11:00</th>
                            <td>Opening Ceremony</td>
                          </tr>
                          <tr>
                            <th scope="row">11:17</th>
                            <td>MATCH A
                              UPPER BRACKET ROUND 1 MATCH 1
                              ONIC ESPORTS VS EVOS ESPORTS
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">12:56</th>
                            <td>MATCH B
                              UPPER BRACKET ROUND 1 MATCH 2
                              AEROWOLF ROXY VS REX REGUM QEON
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">14:39</th>
                            <td>MATCH C
                              LOWER BRACKET ROUND 1 MATCH 1
                              LOUVRE VS SFI ESPORTS
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">16:22</th>
                            <td>MATCH D
                              LOWER BRACKET ROUND 1 MATCH 2
                              SAINTS INDO VS BIGETRON ESPORTS
                              BEST OF 3
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">18:05</th>
                            <td>MATCH E
                              LOWER BRACKET ROUND 2 MATCH 1
                              LOSER MATCH B VS WINNER MATCH C
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">19:48</th>
                            <td>MATCH F
                              LOWER BRACKET ROUND 2 MATCH 2
                              LOSER MATCH A VS WINNER MATCH D
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">21:31</th>
                            <td>CLOSING DAY 1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
    
    
    
    
                  <div class="tab-pane fade" id="day-2" role="tabpanel" aria-labelledby="day-2-tab">
                    <div class="table-responsive">
                      <table class="table table-hover text-black">
                        <tbody>
                          <tr>
                            <th scope="row">10:15</th>
                            <td>Opening Ceremony Day 2</td>
                          </tr>
                          <tr>
                            <th scope="row">10:25</th>
                            <td>MATCH G
                              UPPER BRACKET ROUND 2
                              WINNER A VS WINNER B
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">12:09</th>
                            <td>MATCH H
                              LOWER BRACKET ROUND 3
                              WINNER E VS WINNER F
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">13:53</th>
                            <td>MATCH I
                              FINAL LOWER BRACKET
                              LOSER G VS WINNER H
                              BEST OF 3</td>
                          </tr>
                          <tr>
                            <th scope="row">15:37</th>
                            <td>
                              FUN MATCH
                              Shoutcasters vs Professional Players
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">16:27</th>
                            <td>Awarding 8th - 3rd Place</td>
                          </tr>
                          <tr>
                            <th scope="row">16:48</th>
                            <td>Grand Final Opening Ceremony</td>
                          </tr>
                          <tr>
                            <th scope="row">16:53</th>
                            <td>GRAND FINAL
                              WINNER G VS WINNER I
                              BEST OF 5</td>
                          </tr>
                          <tr>
                            <th scope="row">19:30</th>
                            <td>Awarding 1st &amp; 2nd Place</td>
                          </tr>
                          <tr>
                            <th scope="row">19:36</th>
                            <td>Closing Ceremony - DJ Show</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
    
    
    
    
                  <div class="tab-pane fade" id="day-3" role="tabpanel" aria-labelledby="day-3-tab">
                      <div class="table-responsive">
                        <table class="table table-hover text-black">
                          <tbody>
                            <tr>
                              <th scope="row">10:15</th>
                              <td>Opening Ceremony Day 2</td>
                            </tr>
                            <tr>
                              <th scope="row">10:25</th>
                              <td>MATCH G
                                UPPER BRACKET ROUND 2
                                WINNER A VS WINNER B
                                BEST OF 3</td>
                            </tr>
                            <tr>
                              <th scope="row">12:09</th>
                              <td>MATCH H
                                LOWER BRACKET ROUND 3
                                WINNER E VS WINNER F
                                BEST OF 3</td>
                            </tr>
                            <tr>
                              <th scope="row">13:53</th>
                              <td>MATCH I
                                FINAL LOWER BRACKET
                                LOSER G VS WINNER H
                                BEST OF 3</td>
                            </tr>
                            <tr>
                              <th scope="row">15:37</th>
                              <td>
                                FUN MATCH
                                Shoutcasters vs Professional Players
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">16:27</th>
                              <td>Awarding 8th - 3rd Place</td>
                            </tr>
                            <tr>
                              <th scope="row">16:48</th>
                              <td>Grand Final Opening Ceremony</td>
                            </tr>
                            <tr>
                              <th scope="row">16:53</th>
                              <td>GRAND FINAL
                                WINNER G VS WINNER I
                                BEST OF 5</td>
                            </tr>
                            <tr>
                              <th scope="row">19:30</th>
                              <td>Awarding 1st &amp; 2nd Place</td>
                            </tr>
                            <tr>
                              <th scope="row">19:36</th>
                              <td>Closing Ceremony - DJ Show</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
    
    
                </div>
              </div>
        </div>
	
				
				<h2> ____________ </h2>


		</div>
		);
}

export default Card;
