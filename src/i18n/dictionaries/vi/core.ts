import type { CoreDictionary } from "../en/core";

/**
 * Vietnamese shared copy.
 *
 * Typed against the English object, so a missing or misspelled key is a build
 * error rather than an English string appearing on a Vietnamese page.
 *
 * NOT YET REVIEWED BY A NATIVE SPEAKER. ZEUS should correct the terminology
 * before this goes to a customer. Notes on the choices made:
 *
 *   - "Zeus reported" becomes "ZEUS công bố" (ZEUS states/publishes) rather
 *     than "ZEUS báo cáo", which implies a formal filed report.
 *   - "Target" is "Mục tiêu". "Projection" is "Dự phóng", the term used in
 *     Vietnamese financial writing, rather than the everyday "dự đoán".
 *   - "Compute" as a noun has no settled Vietnamese equivalent; "điện toán"
 *     is used throughout for consistency.
 *   - Product names (SSMDC, Bitcoin, AI, GPU, HBM, PFLOPS) are left in
 *     English, which is standard in Vietnamese technical writing.
 */
export const core: CoreDictionary = {
  meta: {
    siteTitle: "ZEUS Engineering, hạ tầng cho điện toán mật độ cao",
    siteDescription:
      "Hạ tầng mô-đun cho Bitcoin, AI và điện toán mật độ cao, thiết kế và chế tạo tại Việt Nam.",
  },

  common: {
    skipToContent: "Chuyển tới nội dung chính",
    conceptVisualisation: "Hình ảnh minh hoạ ý tưởng",
    breadcrumb: "Đường dẫn",
    home: "Trang chủ",
    contact: "Liên hệ",
    readTheFullVision: "Đọc toàn bộ tầm nhìn",
    exploreProject: "Tìm hiểu dự án",
    continueReading: "Tiếp tục",
    important: "Lưu ý quan trọng",
    riskDisclosure: "Công bố rủi ro",
    howToRead: "Cách đọc phần này",
    source: "Nguồn",
    andMoreLines: "+ 2 hạng mục khác",
  },

  status: {
    label: {
      current: "Hiện tại",
      "zeus-reported": "ZEUS công bố",
      target: "Mục tiêu",
      projection: "Dự phóng của ban điều hành",
      concept: "Ý tưởng thiết kế",
    },
    disclosure: {
      current: "Số liệu vận hành do ZEUS Engineering công bố.",
      "zeus-reported":
        "Do ZEUS Engineering công bố. Chưa được kiểm chứng độc lập.",
      target:
        "Một mục tiêu đã đặt ra. Đây không phải năng lực hiện có và cũng không phải một cam kết.",
      projection:
        "Dự báo của ban điều hành dựa trên các giả định đã nêu. Đây không phải một bảo đảm, không phải dự báo lợi nhuận, và không phải kết quả đã đạt được.",
      concept:
        "Một ý tưởng sản phẩm hoặc định hướng kỹ thuật. Đây không phải số lượng thiết bị đã triển khai.",
    },
  },

  langSwitcher: {
    label: "Ngôn ngữ",
    switchTo: "English",
    ariaSwitchTo: "Switch to English",
  },

  nav: {
    menu: "Danh mục",
    close: "Đóng",
    openMenu: "Mở danh mục",
    items: {
      solutions: { label: "Giải pháp" },
      technology: { label: "Công nghệ" },
      projects: { label: "Dự án" },
      investors: { label: "Nhà đầu tư" },
      company: { label: "Công ty" },
      insights: { label: "Góc nhìn" },

      modularDataCenters: {
        label: "Trung tâm dữ liệu mô-đun",
        blurb: "Điện toán đóng gói theo cụm.",
      },
      aiInfrastructure: {
        label: "Hạ tầng AI",
        blurb: "Hạ tầng cho trí tuệ nhân tạo.",
      },
      bitcoinInfrastructure: {
        label: "Hạ tầng Bitcoin",
        blurb: "Tôi luyện qua vận hành liên tục.",
      },
      hostedMining: {
        label: "Lưu trữ máy đào",
        blurb: "Máy của bạn. Hạ tầng của chúng tôi.",
      },
      energyIntegration: {
        label: "Tích hợp năng lượng",
        blurb: "Điện toán bắt đầu từ nguồn điện.",
      },

      technologyOverview: {
        label: "Tổng quan",
        blurb: "Bốn trụ cột, một hệ thống.",
      },
      power: {
        label: "Kiến trúc điện",
        blurb: "Từ lưới điện và mặt trời vào điện toán.",
      },
      cooling: {
        label: "Làm mát và nhiệt",
        blurb: "Nhiệt mới là giới hạn thực sự.",
      },
      compute: {
        label: "Điện toán",
        blurb: "Mật độ, độ sẵn sàng, hiệu suất.",
      },
      monitoring: {
        label: "Giám sát và tự động hoá",
        blurb: "Vận hành từ xa.",
      },

      allProjects: { label: "Tất cả dự án", blurb: "" },
      vungTau: { label: "Vũng Tàu / Bà Rịa", blurb: "Dự án 001." },

      investorsOverview: { label: "Tổng quan", blurb: "" },
      theAsk: { label: "Vòng huy động", blurb: "Mục tiêu 2,69 triệu USD." },
      roadmap: { label: "Lộ trình", blurb: "" },
      economics: { label: "Bài toán kinh tế của một cụm", blurb: "" },
      whyVietnam: { label: "Vì sao chọn Việt Nam", blurb: "" },
      brief: { label: "Tóm lược cho nhà đầu tư", blurb: "Một trang, in được." },

      about: { label: "Giới thiệu", blurb: "" },
      vision: { label: "Tầm nhìn", blurb: "Đích đến của chặng đường này." },
      leadership: { label: "Ban lãnh đạo", blurb: "" },
      careers: { label: "Tuyển dụng", blurb: "" },
      sources: { label: "Nguồn số liệu", blurb: "Mọi con số đều có nguồn." },
    },
    contactPaths: {
      build: {
        label: "Xây dựng cùng ZEUS",
        blurb: "Yêu cầu về hạ tầng và kỹ thuật.",
      },
      host: {
        label: "Gửi máy tại ZEUS",
        blurb: "Yêu cầu về dịch vụ lưu trữ máy đào.",
      },
      invest: {
        label: "Đầu tư vào ZEUS",
        blurb: "Yêu cầu từ nhà đầu tư.",
      },
    },
  },

  footer: {
    heading: "Cùng xây dựng\nnền điện toán kế tiếp.",
    privacy: "Bảo mật",
    registration: "Mã số doanh nghiệp",
  },
};
