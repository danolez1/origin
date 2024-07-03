/**
 * ### Particle 
   A particle is a relatively small or the smallest discrete matter that can be described by several physical or metaphysical properties. Particles vary greatly in size or quantity, from subatomic particles like the electron, to microscopic particles like atoms and molecules, to macroscopic particles like powders and other granular materials.
 * [Quanta Magazine: What is a particle?](https://www.quantamagazine.org/what-is-a-particle-20201112/)
 * [CERN: The Standard Model](https://home.cern/science/physics/standard-model)
 * [Explainer: what are fundamental particles?](https://theconversation.com/explainer-what-are-fundamental-particles-38339)
 * [Wikipedia: Particle](https://en.wikipedia.org/wiki/Particle)
 */

export default interface Particle {
  mass: number;
  charge: number;
  spin: number;
  position: [number, number, number];
  velocity: [number, number, number];
  energy: number;
  momentum: [number, number, number];
  size?: number; // Optional property
  wavefunction: (position: [number, number, number]) => number;
  superpositionStates: Array<{ state: any; amplitude: number }>;
  entanglement: any[];
  probabilityAmplitude: (state: any) => number;
  quantizedValues: Map<string, number[]>;
  uncertaintyPrinciple: (observable1: string, observable2: string) => number;
}
