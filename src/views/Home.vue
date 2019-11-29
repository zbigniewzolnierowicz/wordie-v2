<template>
  <section id="home">
    <header class="hero">
      <h1>Welcome to Wordie!</h1>
      <h2>Your #1 place to learn tech words</h2>
      <transition>
        <Login v-if="loggedIn" @loggedIn="logInHandler" />
      </transition>
    </header>
    <section class="about">
      <h1>Who said that? SURE you can die! You want to die?!</h1>
      <p>
        We'll go deliver this crate like professionals, and then we'll go home.
        Yeah, lots of people did. A sexy mistake. Then throw her in the laundry
        room, which will hereafter be referred to as "the brig". Yeah. Give a
        little credit to our public schools.
      </p>
      <p>
        Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to
        feel ways about stuff! We can't compete with Mom! Her company is big and
        evil! Ours is small and neutral! Oh, you're a dollar naughtier than
        most.
      </p>
      <h2>Why not indeed!</h2>
      <p>
        A sexy mistake. When I was first asked to make a film about my nephew,
        Hubert Farnsworth, I thought "Why should I?" Then later, Leela made the
        film. But if I did make it, you can bet there would have been more
        topless women on motorcycles. Roll film!
      </p>
      <p>
        Oh, how I wish I could believe or understand that! There's only one
        reasonable course of action now: kill Flexo! Interesting. No, wait, the
        other thing: tedious. And why did 'I' have to take a cab? We're also
        Santa Claus!
      </p>
      <h3>Belligerent and numerous.</h3>
      <p>
        Nay, I respect and admire Harold Zoid too much to beat him to death with
        his own Oscar. Actually, that's still true. No! The cat shelter's on to
        me. I'm sure those windmills will keep them cool. Oh, all right, I am.
        But if anything happens to me, tell them I died robbing some old man.
      </p>
      <p>
        We can't compete with Mom! Her company is big and evil! Ours is small
        and neutral! Fatal. Humans dating robots is sick. You people wonder why
        I'm still single? It's 'cause all the fine robot sisters are dating
        humans!
      </p>
      <p>
        Is that a cooking show? Who are those horrible orange men? OK, this has
        gotta stop. I'm going to remind Fry of his humanity the way only a woman
        can. That could be 'my' beautiful soul sitting naked on a couch. If I
        could just learn to play this stupid thing.
      </p>
      <p>
        Bender, this is Fry's decision… and he made it wrong. So it's time for
        us to interfere in his life. Ok, we'll go deliver this crate like
        professionals, and then we'll go ride the bumper cars. Bender?! You
        stole the atom.
      </p>
      <p>
        I was having the most wonderful dream. Except you were there, and you
        were there, and you were there! What are their names? Throw her in the
        brig. With a warning label this big, you know they gotta be fun!
      </p>
      <p>
        You lived before you met me?! I was all of history's great robot actors
        - Acting Unit 0.8; Thespomat; David Duchovny! Do a flip! We're rescuing
        ya. I love this planet! I've got wealth, fame, and access to the depths
        of sleaze that those things bring.
      </p>
      <p>
        Incidentally, you have a dime up your nose. Bender, hurry! This fuel's
        expensive! Also, we're dying! Robot 1-X, save my friends! And Zoidberg!
        That's a popular name today. Little "e", big "B"?
      </p>
      <p>
        You've killed me! Oh, you've killed me! Whoa a real live robot; or is
        that some kind of cheesy New Year's costume? Morbo will now introduce
        tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and
        Morbo's good friend, Richard Nixon.
      </p>
      <p>
        You won't have time for sleeping, soldier, not with all the bed making
        you'll be doing. Ah, the 'Breakfast Club' soundtrack! I can't wait til
        I'm old enough to feel ways about stuff! Doomsday device? Ah, now the
        ball's in Farnsworth's court!
      </p>
      <p>
        OK, if everyone's finished being stupid. Ah, the 'Breakfast Club'
        soundtrack! I can't wait til I'm old enough to feel ways about stuff!
        Goodbye, friends. I never thought I'd die like this. But I always really
        hoped.
      </p>
      <p>
        I can explain. It's very valuable. Yes! In your face, Gandhi! Bender!
        Ship! Stop bickering or I'm going to come back there and change your
        opinions manually! Okay, it's 500 dollars, you have no choice of
        carrier, the battery can't hold the charge and the reception isn't very…
      </p>
      <p>
        Yes, except the Dave Matthews Band doesn't rock. You guys aren't Santa!
        You're not even robots. How dare you lie in front of Jesus? I'm a thing.
        Now Fry, it's been a few years since medical school, so remind me.
        Disemboweling in your species: fatal or non-fatal?
      </p>
      <p>
        Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to
        feel ways about stuff! A sexy mistake. Now, now. Perfectly symmetrical
        violence never solved anything. When the lights go out, it's nobody's
        business what goes on between two consenting adults.
      </p>
    </section>
  </section>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "home",
  data() {
    return {
      loggedIn: true
    };
  },
  components: {
    Login
  },
  methods: {
    logInHandler(event) {
      this.loggedIn = false;
      console.table(event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../breakpoints.scss";
#home {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1rem;
}
.hero {
  display: flex;
  height: fit-content;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  border-radius: 1em;
  box-sizing: border-box;
  box-shadow: inset 0 5px 20px rgba(0, 0, 0, 0.19),
    inset 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
  background: linear-gradient(45deg, #b92b27, #1565c0);
  form {
    margin-top: 1em;
  }
}
.about {
  margin: 1em 0;
}
.login {
  width: 40%;
  margin: 1em 0;
}
</style>
