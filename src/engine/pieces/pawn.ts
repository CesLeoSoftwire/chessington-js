import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {

        let currentPosition = board.findPiece(this);
        let availableMoves: Square[] = [];

        // actually rows and columns start from the bottom left
        if (this.isBlack()) {

            let inFront = new Square(currentPosition.row-1, currentPosition.col);
            let twoInFront = new Square(currentPosition.row-2, currentPosition.col);

            if(board.getPiece(inFront) === undefined) {

                if (currentPosition.row === 6 && board.getPiece(twoInFront) === undefined) {
                    availableMoves.push(twoInFront);
                }

                if (currentPosition.row >= 0) {
                    availableMoves.push(inFront);
                }
            }

            let diagonalRight = new Square(currentPosition.row-1, currentPosition.col+1);
            let diagonalLeft = new Square(currentPosition.row-1, currentPosition.col-1);

            if (board.getPiece(diagonalLeft) != undefined){
                availableMoves.push(diagonalLeft);
            }

            if (board.getPiece(diagonalRight) != undefined){
                availableMoves.push(diagonalRight);
            }
        }

        if (this.isWhite()) {

            let inFront = new Square(currentPosition.row+1, currentPosition.col);
            let twoInFront = new Square(currentPosition.row+2, currentPosition.col);
            if(board.getPiece(inFront) == undefined) {

                if (currentPosition.row == 1 && board.getPiece(twoInFront) == undefined) {
                    availableMoves.push(twoInFront);
                }

                if (currentPosition.row <= 7) {
                    availableMoves.push(inFront);
                }
            }

            let diagonalRight = new Square(currentPosition.row+1, currentPosition.col+1);
            let diagonalLeft = new Square(currentPosition.row+1, currentPosition.col-1);

            if (board.getPiece(diagonalLeft) != undefined){
                availableMoves.push(diagonalLeft);
            }

            if (board.getPiece(diagonalRight) != undefined){
                availableMoves.push(diagonalRight);
            }
        }

        return availableMoves;
    }

    public getPosition(board: Board): Square {
        return board.findPiece(this);
    }
}
