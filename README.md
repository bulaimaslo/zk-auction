# ZK-proof driven sealed-bid second-price auction

## Introduction
**Sealed-bid second-price auction** or [Vickrey auction](https://en.wikipedia.org/wiki/Vickrey_auction#:~:text=A%20Vickrey%20auction%20or%20sealed,is%20the%20second-highest%20bid.) is a type of auction, the bids are private until some time limit then the highest bidder wins but the price paid is of second-highest bid.

**Zero-knowledge proofs** can enable sealed bid auctions by allowing bidders to prove that they submitted a valid bid without revealing the actual bid itself. This is useful in sealed bid auctions where bidders want to keep their bids secret from other bidders and the auctioneer.

## Here's how it works:
1. Each bidder generates a random number, known as a commitment, that represents their bid. The commitment is a hash of their bid, so no one can see the actual bid.
2. Each bidder then generates a ZK proof that their commitment is valid, it corresponds to a valid bid. 
3. The bidders submit their commitments and ZK proofs to the auctioneer.
4. The auctioneer verifies the ZK proofs to ensure that the commitments are valid bids, without actually seeing the bids themselves.
5. Once all the bids have been verified, the auctioneer announces the winning bid and the corresponding bidder. 
