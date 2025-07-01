import { instance } from "..";

// 타입 정의
export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

// 리뷰 타입
export interface Review {
  id: number;
  content: string;
  rating: number;
  isPurchased: boolean;
  createdAt: string;
  user: {
    id: number;
    username: string;
  };
}

// 상품 전체 조회
export const getProducts = () => instance.get("/products");

// 상품 상세 조회
export const getProduct = (id: number) => instance.get(`/products/${id}`);

// 상품 생성
export const createProduct = (data: CreateProductDto) =>
  instance.post("/products", data);

// 상품 투표
export const voteProduct = (id: number, data: { type: "buy" | "dontBuy" }) =>
  instance.post(`/products/${id}/vote`, data);

// 투표 마감
export const closeVoting = (id: number) =>
  instance.post(`/api/products/${id}/close-voting`);

// 상품별 리뷰 조회
export const getProductReviews = (productId: number) =>
  instance.get(`/reviews/products/${productId}`);

// 상품별 리뷰 작성
export const createProductReview = (
  productId: number,
  data: { content: string; rating: number; isPurchased: boolean }
) => instance.post(`/reviews/products/${productId}`, data);

// 추천 상품 조회
export const getRecommendedProducts = () =>
  instance.get("/recommendations/personalized");
// 트렌딩 상품 조회
export const getTrendingProducts = () =>
  instance.get("/recommendations/trending");

// 카테고리별 상품 조회
export const getProductsByCategory = (category: string) =>
  instance.get(`/products/category/${category}`);
