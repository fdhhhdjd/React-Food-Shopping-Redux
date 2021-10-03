const node = () => {
  return (
    <div>
      <p>
        forwardRef:là một method cho phép các components cha truyền các refs
        (tham chiếu) xuống các component con của chúng. forwardRef đưa cho
        component con một tham chiếu đến một phần tử DOM được tạo bởi cha của nó
        và điều này cho phép chúng có thể đọc và sửa đổi phần tử đó ở bất cứ đâu
        mà nó đang được sử dụng.
      </p>
    </div>
  );
};

export default node;
