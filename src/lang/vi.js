export default {
  common: {
    back: 'Quay lại',
    return: 'Trở về',
  },
  route: {
    student: "Sinh viên",
    room: "Phòng máy",
    university: "Trường đại học",
    'exam-room': 'Phòng Thi',
    'register-exam': 'Đăng kí thi',
    'student subject': 'Lớp học phần',
    'register-shift': 'Đăng kí ca thi',
    'view-and-print': 'Xem và in kết quả',
    subject: 'Môn học',
    semester: 'Kỳ thi',
    dashboard: 'Giao diện chính',
    profile: 'Hồ sơ',
    introduction: 'Giới thiệu',
    documentation: 'Tài liệu',
    guide: 'Hướng dẫn',
    permission: 'Quyền truy cập',
    pagePermission: 'Trang giới hạn truy cập',
    directivePermission: 'Thuộc tính truy cập',
    icons: 'Ký hiệu',
    components: 'Thành phần',
    componentIndex: 'Giới thiệu',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'Soạn thảo JSON',
    dndList: 'Danh sách Dnd',
    splitPane: 'SplitPane',
    avatarUpload: 'Tải hình đại diện',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Biểu đồ',
    keyboardChart: 'Biểu đồ bàn phím',
    lineChart: 'Biểu đồ đường',
    mixChart: 'Biểu đồ đa dạng',
    example: 'Ví dụ',
    nested: 'Danh mục con',
    menu1: 'Danh mục 1',
    'menu1-1': 'Danh mục 1-1',
    'menu1-2': 'Danh mục 1-2',
    'menu1-2-1': 'Danh mục 1-2-1',
    'menu1-2-2': 'Danh mục 1-2-2',
    'menu1-3': 'Danh mục 1-3',
    menu2: 'Danh mục 2',
    Table: 'Bảng',
    dynamicTable: 'Bảng động',
    dragTable: 'Bảng kéo thả',
    inlineEditTable: 'Chỉnh sửa trực tiếp',
    complexTable: 'Bảng phức tạp',
    treeTable: 'Bảng dạng cây',
    customTreeTable: 'Bảng dạng cây tùy biến',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Viết bài',
    editArticle: 'Chỉnh sửa',
    articleList: 'Tin tức',
    errorPages: 'Trang lỗi',
    page401: '401',
    page404: '404',
    errorLog: 'Lỗi',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'Liên kết ngoài',
    elementUi: 'Thành phần giao diện',
    administrator: 'Quản trị',
    users: 'Tài khoản',
    userProfile: 'Tài khoản người dùng',
    rolePermission: 'Quản lý quyền truy cập',
  },
  navbar: {
    logOut: 'Đăng xuất',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Toàn màn hình',
    theme: 'Theme',
    size: 'Global Size',
    profile: 'Trang cá nhân',
  },
  login: {
    title: 'Đăng nhập',
    logIn: 'Đăng nhập',
    username: 'Username',
    email: 'Email',
    password: 'Mật khẩu',
    any: 'any',
    thirdparty: 'Hoặc đăng nhập với',
    thirdpartyTips: 'Không thể giả lập, xi vui lòng áp dụng tùy theo tình huống nghiệp vụ của bạn! ! !',
  },
  documentation: {
    documentation: 'Tài liệu',
    github: 'Github Repository',
    laravel: 'Laravel',
  },
  permission: {
    roles: 'Nhóm của bạn',
    switchRoles: 'Đổi nhóm',
    tips: 'Trong vài trường hợp sẽ không thích hợp để dùng v-permission, như là thành phần Tab hay el-table-column và các trường hợp render DOM không đồng bộ, khi đó chỉ có thể xử lý bằng tay với v-if.',
  },
  guide: {
    description: 'Trang hướng dẫn sẽ có ích cho những người mới vào website lần đầu. Bạn có thể giới thiệu sơ lược các chức năng của website. Kiểm tra demo',
    button: 'Hiện hướng dẫn',
    previous: 'Trước',
    next: 'Sau',
    done: 'Hoàn thành',
    close: 'Đóng',
    intro: 'Giới thiệu và hướng dẫn sử dụng sơ bộ về trang web.',
    show: 'Xem hướng dẫn'
  },
  components: {
    documentation: 'Tài liệu',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'When the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.',
  },
  table: {
    description: 'Mô tả',
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    name: 'Tên',
    title: 'Tiêu đề',
    key: 'Từ khóa...',
    importance: 'IMP',
    type: 'Thể loại',
    remark: 'Remark',
    search: 'Tìm kiếm',
    add: 'Thêm',
    export: 'Xuất dữ liệu',
    reviewer: 'reviewer',
    id: 'ID',
    no: 'STT',
    date: 'Ngày',
    author: 'Tác giả',
    readings: 'Số lần đọc',
    status: 'Trạng thái',
    actions: 'Actions',
    edit: 'Sửa',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Xóa',
    cancel: 'Hủy bỏ',
    confirm: 'Xác nhận',
    keyword: 'Từ khóa',
    role: 'Nhóm',
    updatedAt: 'Cập nhật lúc',
    username: 'Tài khoản',
    email: 'Email',
    create: 'Thêm',
    active: 'Hoạt động',
    inactive: 'Khóa',
    shortName: 'Tên rút gọn',
    university: 'Trường đại học',
    startDate: 'Ngày bắt đầu',
    endDate: 'Ngày hết hạn',
    prolonged: 'Kéo dài',
    expiry: 'Hết hạn',
    time: 'Thời gian',
    emptyData: 'Dữ liệu trống'
  },
  time: {
    minute: 'Phút',
    hour: 'Giờ',
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    date: 'Ngày',
    pickAYear: 'Chọn năm',
    pickAMonth: 'Chọn tháng',
    pickAWeek: 'Chọn tuần',
    pickADay: 'Chọn ngày',
    startDate: 'Ngày bắt đầu',
    endDate: 'Ngày kết thúc',
    startTime: 'Thời gian bắt đầu',
    endTime: 'Thời gian kết thúc',
    startAt: 'Bắt đầu lúc',
    finishAt: 'Kết thúc lúc',
    expired: 'Expired',
    expired: 'Hết hạn',
    afterWeek: 'Sau 1 tuần',
    after2Week: 'Sau 2 tuần',
    afterMonth: 'Sau 1 tháng',
    after2Month: 'Sau 2 tháng',
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction',
  },
  theme: {
    change: 'Thay đổi chủ đề',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.',
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All',
  },
  user: {
    'role': 'Nhóm',
    'password': 'Mật khẩu',
    'confirmPassword': 'Nhập lại mật khẩu',
    'name': 'Tên',
    'email': 'Địa chỉ email',
  },
  roles: {
    description: {
      admin: 'Super Administrator. Có full mọi quyền ở website.',
      student: 'Sinh viên. Chỉ được vào để đăng kí thi',
    },
  },
  settings: {
    title: 'Cài đặt trang',
    theme: 'Màu chủ đề',
    tagsView: 'Mở thanh Tags-View',
    fixedHeader: 'Tiêu đề cố định',
    sidebarLogo: 'Logo bên trái'
  },
  "font.Default": "Mặc định",
  "font.Medium": "Trung bình",
  "font.Small": "Nhỏ vừa",
  "font.Mini": "Nhỏ hơn nữa",
  "Compiling the theme": "Đang biên soạn chủ đề",
  "Switch Language Success": "Chuyển ngôn ngữ thành công",
  "you browser can not work": "Trình duyệt không thể thực hiện thao tác",
  "Switch Size Success": "Chuyển cỡ chữ thành công",
  "el.colorpicker.confirm": "Xác nhận",
  "Global Size": "Cỡ chữ",
  "Current Password Is Wrong": "Mật khẩu hiện tại không đúng",
  "The user credentials were incorrect.": "Thông tin đăng nhập của người dùng không chính xác.",
  "New password Is same current password": "Mật khẩu mới giống mật khẩu cũ",
  "Open && Close sidebar": 'Mở và đóng thanh ứng dụng bên trái',
  "Indicate the current page location": "Cho biết vị trí trang hiện tại đang mở",
  "Page search, quick navigation": "Tìm kiếm trang, điều hướng nhanh",
  "Set the page into fullscreen": "Cài đặt trang thành toàn màn hình",
  "Switch the system size": "Chuyển kích cỡ chữ hệ thống",
  "The history of the page you visited": "Lịch sử của trang bạn đã truy cập",
  upload: {
    title: "Tải lên",
    dropFileHere: "Kéo vào",
    or: "hoặc",
    clickToUpload: "nhấn để tải lên",
    file: 'Tệp',
  },
  pagination: {
    all: "Tất cả"
  },
  notify: {
    text: {
      delete: 'Việc này sẽ xóa vĩnh viễn dữ liệu. Tiếp tục?'
    },
    errors: {
      '401': 'Chưa đăng nhập',
      '400': 'URL hoặc tham số không đúng',
      '422': 'Dữ liệu gửi lên không đúng yêu cầu',
      '404': 'Không tìm thấy',
      '403': 'Không được phép truy cập',
      'unknow': 'Đã có lỗi xảy ra',
      '500': 'Lỗi trên máy chủ',
      'networkerror': 'Kết nối mạng gặp vấn đề',
      label: 'Lỗi'
    },
    success: {
      label: 'Thành công',
      createSuccess: 'Thêm mới thành công',
      updateSuccess: 'Cập nhật thành công',
      deleteSuccess: 'Xóa thành công'
    },
    info: {
      cancel: 'Hủy bỏ hoàn tất'
    }
  },
  action: {
    active: 'Hoạt động',
    actived: 'Kích hoạt',
    inactive: 'Khóa',
    delete: 'Xóa',
    edit: 'Sửa',
    update: 'Cập nhật',
    submit: 'Gửi',
    cancel: 'Hủy bỏ',
    confirm: 'Xác nhận',
    ok: 'OK',
    add: 'Thêm',
  },
  semester: {
    title: 'Kì thi',
    term: 'Kì',

  },
  university: {
    title: 'Trường đại học'
  },
  subject: {
    title: 'Môn học',
    duration: 'Thời gian',
    code: 'Mã môn',
    note: 'Ghi chú',
    code: 'Mã môn',
    qualified: 'Đủ điều kiện',
    disqualified: 'Không đủ điều kiện',
  },
  student: {
    username: 'Mã sinh viên',
    addSingle: "Thêm một",
    addFromFile: "Thêm từ file"
  },
  user: {
    name: 'Tên',
    email: 'Email',
    dob: 'Ngày sinh',
    information: 'Thông tin',
    changePassword: 'Đổi mật khẩu',
    oldPassword: 'Mật khẩu cũ',
    newPassword: 'Mật khẩu mới',
    comfirmPassword: 'Xác nhận mật khẩu mới',
    back: 'Quay lại',
    print: 'In kết quả'
  },
  auth: {
    username: 'Mã sinh viên hoặc email',
    password: 'Mật khẩu',
    login: 'Đăng nhập',
    orConnectWith: 'Hoặc đăng nhập bằng'
  },
  room: {
    title: 'Phòng máy',
    test: 'Phòng thi',
    address: 'Địa chỉ',
    capacity: 'Số lượng máy',
    slot: 'Chỗ',
    title2: 'Phòng',
    computer: 'Máy'
  },
  shift: {
    title: 'Ca thi',
    date: 'Ngày thi',
    time: 'Thời gian thi',
    emptyData: 'Không tìm thấy ca thi nào',
    expiryAfter: 'Hết hạn sau',
    showRoom: 'Xem phòng'
  },
  dashboard: {
    user: 'Người dùng',
    semester: 'Kì thi',
    room: 'Phòng máy',
    examRoom: 'Phòng thi',
    subject: 'Môn thi',
    university: 'Trường đại học'
  }
};