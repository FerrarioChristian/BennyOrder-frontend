import { useRef } from "react";
import { useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { loginCustomerApi } from "../../utils/apiCalls/auth";

function NewSession() {
  const name = useRef<HTMLInputElement>(null);
  const { tirt } = useParams();

  const navigate = useNavigate();

  const { mutate } = useMutation(loginCustomerApi, {
    onSuccess: () => navigate("/clubmenu"),
  });

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();
    mutate({
      tirt,
      name: name.current!.value,
    });
  };

  return (
    <>
      <p>inserisci il tuo nome:</p>
      <input type="text" ref={name} />
      <button type="button" onClick={submit}>
        Accedi
      </button>
    </>
  );
}

export default NewSession;
