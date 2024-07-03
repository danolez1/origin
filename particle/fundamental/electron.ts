/**
 * 
 */

import Particle from "../particle";

export class Electron implements Particle{
    mass: number;
    charge: number;
    spin: number;
    position: [number, number, number];
    velocity: [number, number, number];
    energy: number;
    momentum: [number, number, number];
    size?: number | undefined;
    wavefunction: (position: [number, number, number]) => number;
    superpositionStates: { state: any; amplitude: number; }[];
    entanglement: any[];
    probabilityAmplitude: (state: any) => number;
    quantizedValues: Map<string, number[]>;
    uncertaintyPrinciple: (observable1: string, observable2: string) => number;

}