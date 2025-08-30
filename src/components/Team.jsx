"use client"
import { useState } from "react";
import "./Team.css"; 

const Team = () => {
  const pastors = [
    {
      id: 1,
      name: "Founder President and Senior Pastor",
      position: "Mathew Varughese",
      image: "/Mathew-Varughese.jpeg", 
      bio: "Rev. Mathew Varughese is a visionary leader, church planter, and passionate advocate for the Gospel. With over 22 years of dedicated pastoral and church-planting experience, he has been a pioneer in ministry, bringing hope and transformation to the most vulnerable communities. He is the founder of Amazing Grace Evangelical Mission, a thriving church that began in 2002 with a small gathering in South Delhi and has since grown to a vibrant congregation of over 1,500 believers. Committed to serving the poorest and most marginalised, Rev. Varughese has dedicated his life to reaching those in urgent need of the Gospel, offering both spiritual and practical support to transform lives. In addition to his pastoral calling, Rev. Varughese is a qualified advocate, passionately defending the rights of the helpless and championing Christian causes. He holds a Master of Divinity (MDiv) along with extensive leadership training, equipping him to serve both the church and society with wisdom and integrity. Through his relentless faith, pioneering spirit, and deep compassion, Rev. Mathew Varughese continues to inspire and lead a growing movement of believers, fulfilling the Great Commission and advancing God's kingdom."
    },
    {
      id: 2,
      name: "Associate Pastor",
      position: "Jose Varghese",
      image: "/jose-varghese.jpeg", 
      bio: "Jose Varghese has been serving with Amazing Grace Evangelical Mission for 13 years, initially balancing his professional commitments as well as supporting the ministry. His early ministry as a Sunday School teacher and principal led to the formation of many future Sunday School teachers and leaders, while his years as a youth leader strengthened and equipped the youth and adolescents in their walk with Christ. Now as Associate Pastor, Jose carries a deep burden for the lost and marginalised, frequently travelling with the Founder President, to remote villages across North India to share the gospel and develop communities. His passion for young people and children drives him to inspire them to pursue God's calling with bold faith. Committed to holistic discipleship, he also imparts financial and life stewardship training to underprivileged youth, equipping them for both spiritual and practical growth. In addition to his pastoral role, Jose serves as the Bible School Administrator for Amazing Grace Theological Institute, training future ministers through theological education. His ministry reflects a heart devoted to raising up Christ-centred leaders for the Church in North India. Jose currently resides in South Delhi with his wife, Sali, and his only son Jacinth."
    }
  ];

  const otherMembers = [
    {
      id: 3,
      name: "Mr. Prem Kumar Prabhaskar",
      position: "Secretary",
    },
    {
      id: 4,
      name: "Mr. Ramkrit Ram",
      position: "Member",
    },
    {
      id: 5,
      name: "Mr. Satyawan",
      position: "Member",
    },
  ];

  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="team-page" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      
      <div className="team-container">
        <div className="pastors-section">
          {pastors.map((member) => (
            <div 
              key={member.id}
              className={`team-card ${flipped[member.id] ? 'flipped' : ''}`}
              onClick={() => handleFlip(member.id)}
            >
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div className="team-image-container">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <h3 className="team-position">{member.position}</h3>
                  <h2 className="team-name">{member.name}</h2>
                </div>
                <div className="team-card-back">
                  <div className="team-bio-container">
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="other-members-section">
          {otherMembers.map((member) => (
            <div key={member.id} className="team-tile">
              <h3 className="team-tile-name">{member.name}</h3>
              <p className="team-tile-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;