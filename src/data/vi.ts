/**
 * ============================================================
 * VIETNAMESE COPY
 * ============================================================
 *
 * ZEUS is a Vietnamese company selling to Vietnamese counterparties: EVN,
 * provincial authorities, domestic capital and a domestic hosted-mining
 * audience. An English-only site serves foreign investors and nobody else.
 *
 * SCOPE. This is a complete Vietnamese overview at `/vi`, not a translation
 * of all 26 English routes. It stands on its own: who ZEUS is, what operates
 * today, the SSMDC proposition, hosted mining, the raise, and how to read
 * every figure. It is not a stub, and it does not link into English pages as
 * though they were translated.
 *
 * REVIEW. This copy has NOT been reviewed by a native Vietnamese speaker.
 * ZEUS should correct it before it goes anywhere near a customer. Everything
 * translatable lives in this one file precisely so that review is a single
 * pass over a single document rather than a hunt through 26 components.
 *
 * NUMBERS ARE NOT TRANSLATED. Every figure is imported from the same data
 * layer the English site uses, so a correction there propagates here. No
 * figure is retyped in this file, which is the only way the two languages
 * cannot drift apart.
 *
 * THE ONE EXCEPTION is prose that had to be translated rather than reused:
 * `hosting.included` mirrors `hostingIncluded` in `src/data/hosting.ts`, and
 * `investors.items` mirrors the `item` labels in `useOfFunds`. If either
 * English list gains an entry, add it here too.
 */

/** Status labels. The word carries the meaning, so these must be exact. */
export const viStatusLabel = {
  current: "Hiện tại",
  "zeus-reported": "ZEUS công bố",
  target: "Mục tiêu",
  projection: "Dự phóng của ban điều hành",
  concept: "Ý tưởng thiết kế",
} as const;

export const viStatusDisclosure = {
  current: "Số liệu vận hành do ZEUS Engineering công bố.",
  "zeus-reported":
    "Do ZEUS Engineering công bố. Chưa được kiểm chứng độc lập.",
  target:
    "Một mục tiêu đã đặt ra. Đây không phải năng lực hiện có và cũng không phải một cam kết.",
  projection:
    "Dự báo của ban điều hành dựa trên các giả định đã nêu. Đây không phải một bảo đảm, không phải dự báo lợi nhuận, và không phải kết quả đã đạt được.",
  concept:
    "Một ý tưởng sản phẩm hoặc định hướng kỹ thuật. Đây không phải số lượng thiết bị đã triển khai.",
} as const;

export const vi = {
  meta: {
    title: "ZEUS Engineering, hạ tầng điện toán mật độ cao",
    description:
      "ZEUS Engineering JSC: hạ tầng trung tâm dữ liệu mô-đun cho Bitcoin, AI và điện toán mật độ cao, thiết kế và vận hành tại Việt Nam.",
  },

  nav: {
    label: "Tiếng Việt",
    toEnglish: "English",
    toEnglishNote: "Toàn bộ nội dung chi tiết hiện có bằng tiếng Anh.",
  },

  hero: {
    kicker: "Tổng quan",
    title: "Hạ tầng cho\nđiện toán\nmật độ cao.",
    lede: "ZEUS Engineering là một công ty kỹ thuật tại miền Nam Việt Nam, chuyên về hạ tầng trung tâm dữ liệu mô-đun, khai thác Bitcoin, trí tuệ nhân tạo, tích hợp năng lượng tái tạo và tối ưu hoá hệ thống điện.",
    note: "Trang này là bản tổng quan bằng tiếng Việt. Các trang kỹ thuật và tài liệu dành cho nhà đầu tư hiện được trình bày đầy đủ bằng tiếng Anh.",
  },

  howToRead: {
    kicker: "Cách đọc các con số",
    title: "Mỗi con số\nđều có nhãn.",
    lede: "Trên toàn bộ trang này, mỗi con số đều mang một nhãn cho biết nó là điều đang diễn ra, một mục tiêu, hay một ý tưởng thiết kế. Nhãn luôn được ghi bằng chữ, không chỉ bằng màu sắc.",
    sourcesLink: "Xem toàn bộ nguồn của từng con số",
  },

  operating: {
    kicker: "Đang vận hành",
    title: "Cơ sở tại\nBà Rịa, Vũng Tàu.",
    lede: "Đây là những con số duy nhất trên trang này mô tả một cơ sở đã và đang hoạt động. Các số liệu do ZEUS công bố và chưa được kiểm chứng độc lập.",
    labels: {
      "Facility capacity": "Công suất cơ sở",
      "Operating site": "Diện tích vận hành",
      "Peak solar": "Công suất điện mặt trời đỉnh",
      "Peak hash power": "Công suất băm đỉnh",
    } as Record<string, string>,
  },

  ssmdc: {
    kicker: "SSMDC",
    title: "Trung tâm dữ liệu\nmô-đun chạy\nđiện mặt trời.",
    lede: "SSMDC là hướng phát triển hiện tại của ZEUS: các cụm điện toán nhỏ, lắp ghép sẵn, có điện mặt trời và pin lưu trữ riêng, triển khai trong vài tháng thay vì nhiều năm, và mở rộng bằng cách thêm cụm mới thay vì mở rộng một khu duy nhất.",
    pillars: [
      {
        t: "Mô-đun",
        b: "Các cụm được chế tạo sẵn tại xưởng hoặc lắp đặt nhanh tại chỗ. Mở rộng quy mô bằng cách thêm cụm, không phải mở rộng một khu đất.",
      },
      {
        t: "Điện mặt trời và pin lưu trữ",
        b: "Phát điện và lưu trữ ngay tại chỗ. Giảm chi phí năng lượng và giảm phụ thuộc vào lưới điện.",
      },
      {
        t: "Kiến trúc điện một chiều",
        b: "Loại bỏ tổn hao do nghịch lưu và chuyển đổi AC sang DC. ZEUS ước tính tiết kiệm 8 đến 15% điện năng ở cấp độ cơ sở.",
      },
      {
        t: "Kết hợp bất động sản",
        b: "Đất đai được mua như một loại tài sản thứ hai, giúp cân bằng rủi ro cho mảng điện toán.",
      },
    ],
    nodeTitle: "Thông số một cụm",
    nodeLede:
      "Các con số dưới đây mô tả một cụm quy mô 400 m² chưa được xây dựng. Đây là dải thiết kế, không phải kết quả đo đạc từ một cơ sở đang chạy.",
    labels: {
      "Solar capacity": "Công suất điện mặt trời",
      "Annual solar yield": "Sản lượng điện mặt trời hằng năm",
      "Battery, usable": "Dung lượng pin khả dụng",
      "Continuous IT load": "Phụ tải CNTT liên tục",
      "NVIDIA H100 / H200 GPUs": "GPU NVIDIA H100 / H200",
      "Compute, FP8 sparse": "Năng lực tính toán, FP8 sparse",
      "HBM memory": "Bộ nhớ HBM",
      "GPU hardware cost": "Chi phí phần cứng GPU",
    } as Record<string, string>,
  },

  hosting: {
    kicker: "Dịch vụ lưu trữ máy đào",
    title: "Máy của bạn.\nHạ tầng của chúng tôi.",
    lede: "ZEUS vận hành và bảo trì thiết bị khai thác của khách hàng tại cơ sở của mình: nguồn điện, làm mát, an ninh và vận hành hằng ngày.",
    includedTitle: "Những hạng mục ZEUS cung cấp",
    included: [
      "Vận hành thiết bị",
      "Bảo trì",
      "Hạ tầng điện",
      "Làm mát",
      "An ninh và kiểm soát ra vào cơ sở",
    ],
    labels: {
      "Package price": "Giá gói dịch vụ",
      "Service fee on earnings": "Phí dịch vụ trên doanh thu",
    } as Record<string, string>,
    risk:
      "Khai thác Bitcoin có rủi ro. Doanh thu phụ thuộc vào giá Bitcoin, độ khó mạng lưới, chi phí điện và tình trạng thiết bị, và có thể không đủ bù chi phí. Không có nội dung nào trên trang này là lời khuyên đầu tư. Vui lòng tự thẩm định trước khi quyết định.",
  },

  investors: {
    kicker: "Nhà đầu tư",
    title: "Vòng huy động\nhiện tại.",
    lede: "ZEUS đang huy động vốn để xây dựng những cụm SSMDC đầu tiên, dựa trên một cơ sở khai thác đã vận hành. Đây là mục tiêu huy động vốn, ZEUS chưa công bố rằng vòng này đã cam kết hay đã đóng.",
    runway: "Lộ trình 18 đến 24 tháng để đưa các cụm vào vận hành",
    useTitle: "Phân bổ nguồn vốn",
    useCols: {
      item: "Hạng mục",
      amount: "Số tiền",
      purpose: "Mục đích",
    },
    items: {
      "GPU & server hardware": "Phần cứng GPU và máy chủ",
      "Founders, staff & contractors": "Nhà sáng lập, nhân sự và nhà thầu",
      "Solar, battery, power & build-out":
        "Điện mặt trời, pin lưu trữ, hệ thống điện và thi công",
      "Land options, deposits & setup":
        "Quyền chọn đất, đặt cọc và thủ tục thành lập",
      "R&D, taxes, contingency & working capital":
        "Nghiên cứu phát triển, thuế, dự phòng và vốn lưu động",
    } as Record<string, string>,
    disclaimer:
      "Không có nội dung nào trên trang này là lời khuyên đầu tư, lời chào bán chứng khoán, hay dự báo lợi nhuận. Trang này không công bố bất kỳ con số nào về doanh thu, lợi nhuận, hiệu suất khai thác hay tỷ suất sinh lời, vì ZEUS chưa công bố những con số đó.",
  },

  sources: {
    kicker: "Nguồn số liệu",
    title: "Mỗi con số\nđều có nguồn.",
    body: "Mọi con số về ZEUS trên trang web này đều được lấy từ tài liệu do chính ZEUS công bố, và được liệt kê kèm nguồn gốc trong trang kiểm chứng. Những con số ZEUS công bố nhưng chưa được kiểm chứng độc lập đều được ghi rõ như vậy.",
    cta: "Xem trang kiểm chứng số liệu",
  },

  contact: {
    kicker: "Liên hệ",
    title: "Trao đổi\nvới ZEUS.",
    lede: "Mọi câu hỏi về hạ tầng, dịch vụ lưu trữ máy đào hoặc đầu tư, xin liên hệ trực tiếp.",
    cta: "Gửi yêu cầu",
    emailLabel: "Thư điện tử",
  },

  reviewNotice: {
    title: "Bản dịch đang chờ ZEUS rà soát",
    body: "Nội dung tiếng Việt trên trang này do đơn vị thiết kế soạn và chưa được ZEUS rà soát. Mọi thuật ngữ kỹ thuật và cách diễn đạt đều có thể điều chỉnh theo ý ZEUS.",
  },
} as const;
