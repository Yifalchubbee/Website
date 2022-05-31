import React from 'react';
import './blog1.css';
import blog01 from '../../assets/blog01.png'

export default function Blog1() {
    return (
      <div className="blog1">
        <div className="blog1Wrapper">
          <img
            className="blog1Img"
            src={blog01}
            alt=""
          />
          <h1 className="blog1Title">
          AI: The robots are coming
            <div className="blog1Edit">
              <i className="blog1Icon far fa-edit"></i>
              <i className="blog1Icon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="blog1Info">
            <span>
              Author: Graz University
              <b className="blog1Author">
              </b>
            </span>
            <span>65 days ago</span>
          </div>
          <p className="blog1Desc">
          The advance of AI and its increasing capacity to perform work with a creativity indistinguishable from humans is fuelling more discussion and some concern.
            <br />
            <br />
            At the Venice Biennale running now until July, visitors can see an “ultra-realistic humanoid robot artist,” called Ai-Da. She’s been trotted out for a few years now and this time is showcasing paintings performed by her AI and made by her robotic hand. 
            <br />
            <br />
            Its British inventors have moved beyond the question ‘whether or not robots can make art?’ to exploring ‘now that robots can make art, do we really want them to?’ 
            <br />
            <br />
            Soon, AI algorithms “are going to know you better than you do,” warns Ai-Da’s co-inventor Aidan Meller in The Guardian. “We are entering a world not understanding which is human and which is machine.” 
            <br />
            <br />
            Going further, he implies that society could be edging away from humanism, into an era where machines and algorithms influence our behaviour to a point where our “agency” isn’t just our own. 
            <br />
            <br />
            “It is starting to get outsourced to the decisions and suggestions of algorithms, and complete human autonomy starts to look less robust. Ai-Da creates art, because art no longer has to be restrained by the requirement of human agency alone.” 
            <br />
            <br />
            Art or beauty as they say is in the eye of the beholder so if a machine creates art and we accept that then it is art. 
            <br />
            <br />
            This is what researchers Leah Henrickson and Simone Natale have termed the “Lovelace Effect“ (named after the 19th century female mathematician who essentially programmed Charles Babbage’s first computer for him and whose Christian name is not coincidentally, Ada). 
            <br />
            <br />
            The Lovelace effect shifts the focus from the technological capabilities of machines to the reactions and perceptions of those machines by humans. 
            <br />
            <br />
            “How, where and why we interact with a technology; how we talk about that technology; and where we feel that technology fits in our personal and cultural contexts,” all has a baring on whether what we see or hear is called art, Natale and Henrickson say. 
            <br />
            <br />
            AI in the workplace
            <br />
            <br />
            That all our jobs are in danger of being replaced by AI is presented as a certainty by AI expert Kai-Fu Lee. In his new book AI 2041  he predicts that all blue-collar and all white-collar work jobs will be phased out of existence as AI proves it can do those jobs better – and cheaper.  
            <br />
            <br />
            Moreover, any craft-related jobs that require dexterity and a high level of hand-eye coordination will also eventually been taken over by AI by 2041. That would include many areas of post production such as VFX, animation and assembly edits. Even programme direction of as-live sports matches could be done by a bot. 
            <br />
            <br />
            “Engineering is largely cerebral and somewhat creative work that requires analytical skills and deep understanding of problems,” Lee told IEEE Spectrum. “And those are generally hard for AI. But if you’re a software engineer and most of your job is looking for pieces of code and copy-pasting them together—those jobs are in danger.”  
            <br />
            <br />
            In order to adjust to the digital AI era we are urged to understand the basic tenets of coding, programming languages, scripts, algorithms, compiling, and machine language by US academics Paul Leonardi and Tsedal Neeley. 
            <br />
            <br />
            Developing a digital mind 
            <br />
            <br />
            In their new book The Digital Mindset: What It Really Takes to Thrive in the Age of Data, Algorithms, and AI, they argue that lacking this basic digital awareness would make it difficult to participate in the digital economy. 
            <br />
            <br />
            Critically this mindset requires a shift in how we think about our relationship to machines. We shouldn’t anthropomorphise AIs but treat them exactly as what they are – machines which are built with human input and embedded with human bias. 
            <br />
            <br />
            “Even as they become more ‘humanish’, we need to think about them as machines,” they write. 
            <br />
            <br />
            They point out that advances in AI are moving our interaction with digital tools to more natural-feeling and human-like interactions. For instance, conversational user interfaces like Hello Alexa or OK Google give us the ability to act with digital tools through writing or talking that’s much more the way we interact with other people.  
            <br />
            <br />
            The problem is that these AIs aren’t quite up to human mental agility or mimicry yet.  
            <br />
            <br />
            “We are still some ways away from effective human-like interaction with the technology,” say the professors. 
            <br />
            <br />
            But it seems inevitable that AI will catch-up, not least because we’re feeding it on the neural networks with which our own brains work. 
            <br />
            <br />
            Does that mean AI ultimately attains consciousness? 
            <br />
            <br />
            Graz University’s Wolfgang Maass has hinted at such, saying future neuromorphic setups may one day begin to explore how the multitude of neuronal firing patterns work together to produce consciousness. 
            <br />
            <br />
            
          </p>
        </div>
      </div>
    );
  }
  