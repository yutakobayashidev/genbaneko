import { Command } from 'commander';
import { mGenbaneko } from '..';

const CLI_VERSION = '0.0.0';

/**
 * Run the command line interface program.
 * @param argv process.argv.
 */
const cli = (argv: string[]) => {
  const program = new Command();

  program
    .name('genbaneko')
    .description(`Let's display "Yoshi!" on the console.`)
    .version(CLI_VERSION);

  program
    .command('say')
    .description('Genbaneko say something')
    .argument('<string>', 'serif')
    .action((serif) => {
      mGenbaneko.say(serif);
    });

  program
    .command('think')
    .description('Genbaneko think something')
    .argument('<string>', 'thought')
    .action((thought) => {
      mGenbaneko.think(thought);
    });

  program.parse(argv);
};

cli(process.argv);
