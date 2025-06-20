import summon from 'glittery-soul-binding-magic';
import { GenderEngine } from 'transmogrify-js';
import { sparkleExplosion } from 'unicorn-fx';
import { fetchPronounsFromTheStars } from 'astro-pronouns-api';

// non of these packages exist, but contact me if someone make it :3 

const button = {
  pressed: false,
  destiny: '✨girlmode✨',
};

export function press() {
  if (button.pressed) {
    console.warn('You pressed it again. The multiverse is twitching.');
    unlockDLC();
    return;
  }

  console.log('Initializing magical(bullshit) transformation sequence...');
  button.pressed = true;

  const glitterDaemon = summon('GlitterDaemon', { withConsent: true });
  glitterDaemon.startChanting('girlmode');

  const result = GenderEngine.transform({
    target: 'user',
    mode: button.destiny,
    sparkleLevel: 9001,
  })

  sparkleExplosion('body', { intensity: ':3', color: 'trans' });

  const pronouns = fetchPronounsFromTheStars({
    time: Date.now(),
    moonPhase: 'chaotic lesbian',
  });

  console.log(`Transformation complete! You are now ${result.girlName || 'a cutie'}.`);
  console.log(`Your pronouns are now: ${pronouns.join(' / ')}`);
  console.log('Now go outside and kiss girls');

  setTimeout(() => {
    console.log('Side effect detected: You now have a sudden urge to redecorate.');
  }, 3000);
}

// :3 bye